import React from "react"

const FamilyMemberCard = ({ first_name, last_name, role, avatar }) => (
  <div className="entity-card col col--1-of-2">
    <div className="card">
      <div
        className="entity__image avatar"
        style={{
          backgroundImage: `url(${
            role != 2 ? avatar : "/assets/img/placeholder/childDefault.png" || "/assets/img/placeholder/default.png"
          })`,
        }}
      />
      <div className="group__info tg tg--s">
        <span className="tg__title truncate">{first_name + " " + last_name}</span>
        <span className="tg__sub">{roles[role]}</span>
      </div>
    </div>
  </div>
)
//2 pic should be hidden
const roles = ["", "Parent", "Child", "Grand Parent", "Guardian"]

export default ({ members }) => (
  <div id="familyMembersTab" className="tab__content">
    <div className="row row--tight-gutter">
      {members.map((member, key) => <FamilyMemberCard key={member.id} {...member} />)}
    </div>
    <hr className="hairline" />
    <div className="info-box info-box--tertiary wrapper">
      <div className="info-box__icon wrapper__inner -valign-t">
        <div className="box-icon box-icon--tertiary">
          <svg className="icon-kids icon--l">
            <use xlinkHref="#icon-kids" />
          </svg>
        </div>
      </div>
      <div className="info-box__content">
        <h3>Why is children’s information hidden?</h3>
        <p>
          The privacy and safety of our community is Wana’s #1 priority. To learn more about our Trust & Safety policy
          and to find out how we’re keeping My Family safe, <a href="#">click here</a>.
        </p>
      </div>
    </div>
  </div>
)
