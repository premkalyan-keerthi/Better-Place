import React from "react";
import UserOptions from "./UserOptions";
class App extends React.Component {
  constructor() {
    super();
    this.state = { prevdisabled: true, nextdisabled: false };
  }
  render() {
    return (
      <div>
        <UserOptions />
      </div>
    );
  }
}
export default App;
