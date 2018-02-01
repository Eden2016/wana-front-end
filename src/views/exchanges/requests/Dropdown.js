import React from "react"
import TinyDropdown from "components/wana-ui/dropdown/tiny-dropdown"

export default ({ cname, items, itemsClass, wrapperClass }) => (
  <TinyDropdown className={cname}>
    <ul className={wrapperClass}>
      {items.map((item, i) => <li key={i} className={itemsClass}>{item}</li>)}
    </ul>
  </TinyDropdown>
)
