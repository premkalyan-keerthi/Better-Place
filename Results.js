import React from "react";
import Userinfo from "./Userinfo";
import "./App.css";
function Results(props) {
  const usersDeatils = props.users;
  return (
    <div>
      <ul>
        <div>
        {usersDeatils.map((user, id) => (
          <Userinfo
            name={
              usersDeatils[id].name.title +
              " " +
              usersDeatils[id].name.first +
              " " +
              usersDeatils[id].name.last
            }
            thumbnail={usersDeatils[id].picture.thumbnail}
            gender={usersDeatils[id].gender}
            email={usersDeatils[id].email}
            phone={usersDeatils[id].phone}
            nationality={usersDeatils[id].location.country}
            
          />
        ))}
        </div>
      </ul>
    </div>
  );
}
export default Results;
