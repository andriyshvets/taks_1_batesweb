import data from "../../timezones.json";
import logo from "../../images/Stroke.svg";
// import React from "react";
import "./Header.scss";

export const Header = () => {
  return (
    <div className="header">
        <h1 className="header__title">Event Manager</h1>
        <img src={logo} alt="timezone-logo" className="header__logo" />
        <laber className="header__timezoneLabel" for="timezones">Select Timezone</laber>
        <select
          className="header__timezone"
          name="timezones"
          onChange={function(){}}
        >
          <option value="">Central European Time</option>
          {Object.keys(data.timezones).map(item =>(
            <option key={data.timezones[item].id} value={data.timezones[item].name}>
              {data.timezones[item].name}</option>
          ))}
        </select>
      </div>
  );
}