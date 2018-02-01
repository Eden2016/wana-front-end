import React from "react"

import MessageCard from "./MessageCard"
import ImageCard from "./ImageCard"

export default ({ message, from_user }) => (
  <div className="row">
    <div className="col col--7-of-12">
      <MessageCard
        header="Message"
        content={ message }
      />
    </div>
    <div className="col col--5-of-12">
      <ImageCard
        familyId={ from_user }
        handleSend={() => this.sendMessage(from_user)}
      />
    </div>
  </div>
)
