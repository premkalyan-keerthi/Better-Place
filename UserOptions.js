import React from "react";
import "./App.css";
import Results from "./Results";
class UserOptions extends React.Component {
  constructor() {
    super();
    this.state = {
      s: 1,
      gender: "",
      nat: "",
      res: "",
      users: [],
      updated: false
    };
  }
  previousbutton = () => {
    if (this.state.s > 1) {
      var a = this.state.s;
      this.setState({ s: a - 1 });
    }
  };
  nextbutton = () => {
    var b = this.state.s;
    this.setState({ s: b + 1 });
  };
  componentDidUpdate(prevState, prevProps) {
    console.log("cdu");
    if (
      prevProps.gender !== this.state.gender ||
      prevProps.res !== this.state.res ||
      prevProps.nat !== this.state.nat ||
      prevProps.s !== this.state.s
    ) {
      this.fetchdata();
    }
  }
  genderchange = (e) => {
    this.setState({ gender: e.target.value });
  };
  natchange = (e) => {
    this.setState({ nat: e.target.value });
  };
  reschange = (e) => {
    this.setState({ res: e.target.value });
  };
  fetchdata = () => {
    let url = `https://randomuser.me/api?page=${this.state.s}&results=${this.state.res}&gender=${this.state.gender}&nat=${this.state.nat}`;
    fetch(url)
      .then((res) => {
        //console.log(res);
        return res.json();
      })
      .then((users) => {
        this.setState({ users: users.results });
      });
  };

  render() {
    console.log(this.state.s);
    return (
      <div className='Body'>
        <div className="Header">
        <div className="Alloptions">
        <select className="gender" value={this.state.gender || ""} onChange={this.genderchange}>
          <option>Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <select className="nationality" value={this.state.nat || ""} onChange={this.natchange}>
          <option>Nationality</option>
          <option value="AU">Australia(AU)</option>
          <option value="BR">Brazil(BR)</option>
          <option value="CA">Canada(CA)</option>
          <option value="FR">France(FR)</option>
          <option value="GB">GREAT BRITAIN(GB)</option>
          <option value="US">USA(US)</option>
        </select>
        <select className="ResultPerPage" value={this.state.res || ""} onChange={this.reschange}>
          <option>No. of results</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
        </div>
        <div className="Prev">
        <button className="Pre" onClick={this.previousbutton}>Prev-Page</button>
        <button className="Next"  onClick={this.nextbutton}>Next-Page</button>
        </div>
        </div>
        <div>
        <Results users={this.state.users} />
        </div>
      </div>
    );
  }
}
export default UserOptions;
