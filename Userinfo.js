import React from "react";
import "./App.css";
import LandingPage from "./LandingPage";
function Userinfo(props) {
  return (
    <div className="alldetails">
      <div>
        <LandingPage className="picture" image={props.thumbnail} alt="pic"></LandingPage>
      </div>
      <div className="user_details">
        <div className="info">
          <label className="lbl">Name: </label>
          <div >{props.name}</div>
        </div>
        <div className="info">
          <label className="lbl">Gender: </label>
          <div>{props.gender}</div>
        </div>
        <div className="info">
          <label className="lbl">Email: </label>
          <div>Phone :{props.email}</div>
        </div>
        <div className="info">
          <label className="lbl">Nationality: </label>
          <div>{props.nationality}</div>
        </div>
      </div>
    </div>
  );
}
export default Userinfo;
