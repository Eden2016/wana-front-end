import React from "react"

const keys = ["smoking", "vaccinations", "guns", "outdoor_space", "pool", "pets", "child_cpr", "child_first_aid"]

export default ({ traits }) => {
  if (!traits) return null
  return (
    <div className="card__body no--pad-b">
      <ul className="list list--traits">
        {knownTraits.map((trait, key) => {
          const status = traits[trait.key]
          switch (status) {
            case 1:
              if (trait.yesIcon) return <Trait key={key} icon={trait.yesIcon} text={trait.yesText} />
              else return null
            case 0:
              if ( trait.noIcon )
                return <Trait key={key} icon={trait.noIcon} text={trait.noText} />
              else return null
            default:
              return null
          }
        })}
      </ul>
    </div>
  )
}

const Trait = ({ icon, text }) => (
  <li className="item">
    <svg className={icon}>
      <use xlinkHref={icon} />
    </svg>
    {text}
  </li>
)

var knownTraits = [
  { key: "smoking", noIcon: "icon-no-smoking", yesIcon: false, noText: "Non-Smoking Home", yesText: false },
  {
    key: "vaccinations",
    noIcon: false,
    noText: false,
    yesIcon: "icon-yes-vaccines",
    yesText: "Kids Are Vaccinated",
  },
  {
    key: "guns",
    noIcon: "icon-no-guns",
    noText: "No Firearms in Home",
    yesIcon: "icon-yes-guns",
    yesText: "Firearms Safely Stored",
  },
  {
    key: "outdoor_space",
    noIcon: "icon-no-outdoor-area",
    noText: "No Outdoor Area",
    yesIcon: "icon-yes-outdoor-area",
    yesText: "Has Outdoor Area",
  },
  { key: "pool", noIcon: false, yesIcon: "icon-yes-pool", noText: false, yesText: "Has Pool" },
  {
    key: "pets",
    noIcon: "icon-no-pets",
    noText: "No Pets in Home",
    yesIcon: "icon-yes-pets",
    yesText: "Pets in Home",
  },
  { key: "child_cpr", noIcon: false, noText: false, yesText: "Knows Child CPR", yesIcon: "icon-yes-cpr" },
  {
    key: "child_first_aid",
    noIcon: false,
    noText: false,
    yesIcon: "icon-yes-first-aid",
    yesText: "Knows Child First-Aid",
  },
]
