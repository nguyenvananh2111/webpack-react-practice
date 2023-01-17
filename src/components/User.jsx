import React from "react";
import "./User.scss";

import Icon from "../imgs/icon.png";

const User = (props) => {
  return (
    <div
      style={{
        border: "1px solid red",
      }}
      className="user"
    >
      <h2 className="bgColor">Name: {props.name}</h2>
      <img src={Icon} alt="icon" />
    </div>
  );
};

export default User;
