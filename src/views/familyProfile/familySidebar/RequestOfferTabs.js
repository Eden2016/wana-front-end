import React from "react"

export default  ({ activeTab, changeActiveTab }) => (
  <ul className="tabs__list -reversed" style={{overflowX: "hidden"}} >
    <li className={`tab ${activeTab == 0 ? "is--active" : ""}`} onClick={() => changeActiveTab(0)}>
      Request
    </li>

    <li className={`tab ${activeTab == 1 ? "is--active" : ""}`} onClick={() => changeActiveTab(1)}>
      Offer
    </li>
  </ul>
)
