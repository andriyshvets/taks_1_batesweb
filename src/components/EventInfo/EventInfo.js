import React from "react";
import "./EventInfo.scss"

export const EventInfo = (props) => {
  return (
    <div className="event">
      <p className="event__title">{props.title}</p>
      <button>•••</button>
      <div>{(new Date().toString())}</div>

    </div>
    );
}
