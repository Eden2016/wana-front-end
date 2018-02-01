import React, { Component } from "react"
import Dropzone from "react-dropzone"
import ReactFilestack, { client as filestack } from "filestack-react"
import { withRouter } from "react-router-dom"
import { FILESTACK_API_KEY } from "../../../config/config"
import { v4 } from "node-uuid"

import { getFamilyHousePhotosById, apiPosRequest as post } from "../../../api/families"
import Gallary from "../familySidebar/ThumbnailGallery"
import LoadingOverLay from "./LoadingOverlay"

class HouseHoldPhotoEdit extends Component {
  state = {
    photos: {},
    loading: false,
    error: null,
  }

  // don't know what I was thinking??
  id = null
  client = filestack.init(FILESTACK_API_KEY)

  deleteImage = id => {
    const { loading } = this.state
    if (loading) return

    this.setState({
      loading: true,
    })
    post(`/my-family/house_photo/${id}/delete`)
      .then(({ success: photo }) => {
        delete this.state.photos[photo.id]
        this.setState({
          photos: { ...this.state.photos },
          loading: false,
        })
      })
      .catch(err => {
        console.log(err)
        this.setState({
          loading: false,
        })
      })
  }

  uploadImage = async files => {
    const { photos, loading } = this.state
    if (Object.keys(photos).length > 5) {
      this.setState({
        error: "you can add no more than 6 images",
      })
      setTimeout(() => {
        this.setState({
          error: null,
        })
      }, 2000)
      return
    }

    if (loading) {
      return
    }

    let photo = null

    try {
      this.setState({
        loading: true,
      })
      photo = await this.client.upload(
        files[0],
        {},
        {
          filename: v4(),
          location: "s3",
        },
      )
    } catch (err) {
      console.log(err)
      this.setState({
        loading: false,
      })

      this.onDragLeave()
      return
    }

    post("my-family/house_photo", {
      house_photo: [photo.url],
    })
      .then(({ success }) => {
        const photo = success[0]

        this.setState({
          photos: {
            ...this.state.photos,
            [photo.id]: photo,
          },
          loading: false,
        })
      })
      .catch(err => {
        console.log(err)
        this.setState({
          loading: false,
        })
      })

    this.onDragLeave()
  }

  onDragEnter = () => {
    // styles
  }

  onDragLeave = () => {
    // styles
  }

  componentDidMount() {
    this.id = this.props.match.params.id
    getFamilyHousePhotosById(this.id).then(({ success }) => {
      const photos = success.reduce((acc, photo) => {
        acc[photo.id] = photo
        return acc
      }, {})

      this.setState({
        photos,
      })
    })
  }

  render() {
    const { photos, loading, error } = this.state
    return (
      <div style={{ position: "relative" }}>
        <h6>PHOTOS OF YOUR HOME (MAX OF 6)</h6>
        {Object.keys(photos).length > 0 && (
          <div className="card__foot">
            <ul className="list list--thumbs">
              {Object.keys(photos).map(key => (
                <PhotoView deleteImage={this.deleteImage} photo={photos[key]} key={key} />
              ))}
            </ul>
          </div>
        )}
        <Dropzone
          onDrop={this.uploadImage}
          onDragOver={this.onDragOver}
          onDragLeave={this.onDragLeave}
          disabled={this.state.loading}
          style={{ width: "auto", height: "auto", border: "none" }}
        >
          <div className="upload__container">
            <img src="/assets/img/upload.png" alt="" />
            <p>drag an image or click to select one</p>
          </div>
        </Dropzone>
        {error && <p className="error"> {error} </p>}
        {loading && <LoadingOverLay />}
      </div>
    )
  }
}

const PhotoView = ({ photo, deleteImage }) => (
  <li className="thumb thumb__edit" onClick={() => deleteImage(photo.id)}>
    <img src={photo.house_photo} alt="household photo" />
    <div className="overloay__delete">
      <div style={{ width: "30px", height: "30px", backgroundColor: "transparent" }}>
        <img src="../../../assets/img/delete.png" />
      </div>
    </div>
  </li>
)

export default withRouter(HouseHoldPhotoEdit)
