import React from "react"

export default ({ changeActiveTab , activeTab }) => (
  <section className="content__section">
  <div className="section__head bar">
    <div className="container">
      <ul className="tabs__list" style={{overflowX: "hidden"}}>
        <li className={`tab ${activeTab == 0 ? "is--active" : ""}`} onClick={() => changeActiveTab(0) }>Activity Feed</li>
        <li className={`tab ${activeTab == 1 ? "is--active" : ""}`} onClick={() => changeActiveTab(1)} >Family Members</li>
      </ul>
    </div>
  </div>
</section>
)
