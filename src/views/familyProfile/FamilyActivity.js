import React, { Component } from "react"
import { connect } from "react-redux"
import ActivityTab from "./ActivityTab"
import FamilyMembersTab from "./FamilyMembersTab"
import { getFamilyFeedById } from "../../api/families"

class FamilyActivity extends Component {
  mounted = false
  state = {
    data: [],
  }
  componentDidMount() {
    this.mounted = true
    const { familyId: id } = this.props
    this.loadData( id )
  }

  loadData = id => {
    getFamilyFeedById(id).then(res => {
      this.mounted &&
        this.setState({
          data: res.success.data,
        })
    })
  }

  componentWillReceiveProps(nextProps) {
    const { familyId: pId } = this.props
    const { familyId: nId } = nextProps
    if (pId !== nId) {
      this.loadData(nId)
    }
  }

  componentWillUnmount() {
    this.mounted = false
  }

  render() {
    const { activeTab, members, familyId, userId, family, avatar } = this.props
    return (
      <div className="col col--7-of-12">
        {activeTab == 0 && <ActivityTab data={this.state.data} userData={{ userId, family, avatar }} familyId={familyId} />}
        {activeTab == 1 && <FamilyMembersTab members={members} />}
      </div>
    )
  }
}

const mapStateToProps = ({ auth }) => ({
  userId: auth.userData && auth.userData.id,
  family: auth.userData && auth.userData.family,
  avatar: auth.userData && auth.userData.avatar,
})

export default connect(mapStateToProps)(FamilyActivity)
