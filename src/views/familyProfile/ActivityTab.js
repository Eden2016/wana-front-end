import React, { Component } from "react"
import moment, { updateLocale } from "moment"
import classnames from "classnames"
import ActivityCard from "./Activity/ActivityCard"

export default class activityTab extends Component {
  formatDate = date => {
    return moment(date).fromNow()
  }

  render() {
    const { data, userData } = this.props
    return (
      <div id="activityTab" style={{ marginBottom: "1.5em" }} className="tab__content">
        {data.map((item, i) => {
          const { type } = item
          const offer = type.toLowerCase() == "offer"
          const myFamily = {
            name: "My Family",
          }

          const created_by = {
            name: `${item.created_by[0].first_name} ${item.created_by[0].last_name}`,
            avatar: item.created_by[0].avatar,
          }
          const accepted_by = {
            name: `${item.accepted_by[0].first_name} ${item.accepted_by[0].last_name}`,
            avatar: item.accepted_by[0].avatar,
          }

          const commentable = false // TODO <<
          // userData.family &&
          // (userData.family.id === item.created_by.family.id || userData.family.id === item.accepted_by.family.id)

          return (
            <ActivityCard
              key={i}
              commentable={commentable}
              userData={userData}
              item={{
                sitter: offer ? created_by : { ...accepted_by, ...myFamily },
                satee: !offer ? created_by : { ...accepted_by, ...myFamily },
                date: this.formatDate(item.created_at),
                comments: item.messages.reduce((memo, item) => {
                  memo.push({
                    avatar: item.from.avatar,
                    name: `${item.from.first_name} ${item.from.last_name}`,
                    message: item.message,
                    date: this.formatDate(item.created_at),
                  })
                  return memo
                }, []),
              }}
            />
          )
        })}
      </div>
    )
  }
}
