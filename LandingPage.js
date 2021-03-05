import React from "react";
import "./App.css";
class LandingPage extends React.Component {
  state = { open: false };

  handleclick = () => {
    this.setState({ open: !this.state.open });
    console.log("Hi prem click is done");
  };

  render() {
    return (
      <div>
        <img className="preimg" src={this.props.image} onClick={this.handleclick} alt="no" />
        {this.state.open && (
          <dialog
            className="img"
            open
            onClick={this.handleclick}
          >
            <img
              className="postimg"
              src={this.props.image}
              onClick={this.handleclick}
              alt="pic"
            />
          </dialog>
        )}
      </div>
    );
  }
}
export default LandingPage;
