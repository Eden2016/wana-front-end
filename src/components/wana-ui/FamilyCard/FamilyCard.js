import React from "react"
import { Link } from "react-router-dom"
import classnames from "classnames"

const Tags = ({ tags }) => {
  return tags && tags.length > 0 ? (
    <div className="wrapper__inner">
      <ul className="tags__list">
        {tags.map(tag => (
          <li key={tag.text} className="tag">
            {tag.text}
          </li>
        ))}
      </ul>
    </div>
  ) : null
}

const Card = ({
  href,
  tags,
  title,
  subTitle,
  fbText,
  backgroundImage = "/assets/img/def-family.png",
  adults = [],
  children = [],
}) => (
  <Link className={classnames("fam", "card", { "is--connected": fbText })} to={href}>
    <div className="card__controls wrapper -reversed">
      <Tags tags={tags} />
      {/* wrapper inner align right */}
    </div>

    <div className="fam__card-image card__image go ar ar--16-9" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="card__image-b wrapper">
        <div className="wrapper__inner">

          <ul className="fam__adults list list--inline">
            {adults.map(({ avatar, name }, i) => (
              <AdultItem key={i} img={avatar} name={name} />
            ))}
          </ul>

        </div>
        <div className="wrapper__inner -align-right">
          <ul className="fam__kids list list--inline">
            {children.map(({ avatar, name }, i) => (
              <ChildItem key={i} img={avatar} name={name} />
            ))}
          </ul>
        </div>
      </div>
    </div>
    <div className="card__body">
      <div className="fam__meta tg tg--m">
        <span className="fam__name tg__title">{title}</span>
        <span className="fam__desc tg__sub">{subTitle}</span>
        <span className="fam__connection tg__tertiary">
          {fbText ? `you and ${title} are friends on facebook` : "Not Connected"}
        </span>
      </div>
    </div>
  </Link>
)

const AdultItem = ({ img, name }) => (
  <li className="item">
    <div className="avatar avatar--s" {...(img && {style:{...{backgroundImage: `url('${img}')`}}})} name={name} />
  </li>
)

const ChildItem = ({ img, name }) => (
  <li className="item">
    <div className="avatar avatar--xs" {...(img && {style:{...{backgroundImage: `url('${img}')`}}})} name={name} />
  </li>
)

export default Card
