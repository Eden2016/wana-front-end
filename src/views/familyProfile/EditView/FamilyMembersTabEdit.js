import React from "react"
import Dropzone from "react-dropzone"
import FamilyDataForm from '../../../components/forms/family-data';

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

// export default ({ members }) => (
//     <div id="familyMembersTab" className="tab__content">
//       <div className="row row--tight-gutter">
//         {members.map((member, key) => <FamilyMemberCard key={member.id} {...member} />)}
//       </div>
//       <Dropzone style={{width: "auto", height: "auto" , border: "none"}}>
//         <div className="add__members">
//           <img src="/assets/img/upload.png" alt="" />
//           <p>Add New Family member</p>
//           <button className="btn btn--secondary"> Add Family Member </button>
//         </div>
//       </Dropzone>
//     </div>
// )

export default ({ members }) => {
  console.log('MEMBERS', members)
  return members.length < 1 ? <p>Loading family...</p> : <FamilyDataForm isSignup={false} members={members} />;
}
