import React, { Component } from "react"
import classnames from "classnames"

export default class ActivityCard extends Component {
  state = {
    expanded: this.props.expanded || false
  }
  toggleExpanded = () => {
    this.setState(ps => ({
      expanded: !ps.expanded,
    }))
  }
  render() {
    const { commentable, userData, item: { sitter, satee, date, comments } } = this.props

    return (
      <div className={classnames("activity card", { "is--expanded": this.state.expanded })}>
        <div className="activity__main wrapper" onClick={this.toggleExpanded}>
          <div className="wrapper__inner">
            <div className="avatar avatar--square" style={{ backgroundImage: `url(${sitter.avatar})` }} />
            <div className="tg tg--s -disp-ib">
              <span className="tg__title">
                <strong>{sitter.name}</strong> sat for <strong>{satee.name}</strong>
              </span>
              <span className="tg__sub">{date}</span>
            </div>
          </div>
          <CommentCount count={comments.length} />
        </div>

        <div className="activity__comments">
          <ul className="comments__group">{comments.map((comment, i) => <Comment key={i} comment={comment} />)}</ul>
          {commentable && <CommentInput backgroundImage={userData.avatar} />}
        </div>
      </div>
    )
  }
}

const Comment = ({ comment: { avatar, name, message, date } }) => (
  <li className="comment">
    <div className="avatar avatar--s" style={{ backgroundImage: `url(${avatar})` }} />
    <div className="comment__text">
      <span className="name">{name}</span>
      {message}
      <span className="timestamp">{date}</span>
    </div>
  </li>
)

const CommentInput = ({ backgroundImage }) => (
  <div className="comment__new">
    <div className="avatar avatar--s" style={{ backgroundImage: `url(${backgroundImage})` }} />
    <div className="input input--text input--s">
      <input type="text" className="input__field" placeholder="Write a comment..." />
    </div>
  </div>
)

const CommentCount = ({ count }) => (
  <div className="wrapper__inner -align-right">
    <a className="comment__count tag tag--secondary tag--outline" href="javascript:;">
      <svg className="icon-comments">
        <use xlinkHref="#icon-comments" />
      </svg>
      {count}
    </a>
  </div>
)
