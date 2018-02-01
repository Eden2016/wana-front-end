import React, { Component } from 'react';
import { getHousePhotos } from '../../../api/sittings';

class FamilyPhotos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
    }
  }

  componentDidMount() {
    const { sit } = this.props;
    this.getPhotos(sit.created_by);
  }

  getPhotos = async (id) => {
    const res = await getHousePhotos(id);
    if (res.success) {
      this.setState({ photos: res.success });
    }
  }

  render() {
    const { photos } = this.state;
    const more = `${photos.length > 6 ? photos.length - 6 : 0}`;
    return (
      <div className="card__foot">
        <ul className="list list--thumbs">
          {
            photos.map((photo, i) =>
              i > 6 ? '' :
              <li key={`photo-${i}`} className="thumb" data-more={`${i > 6 ? more : ''}`}>
                <img src={photo.url} alt="" />
              </li> )
          }
        </ul>
      </div>
    )
  }
}

export default FamilyPhotos;
