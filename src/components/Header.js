import React from "react";
import "../styles/Header.css";
class Header extends React.Component {
  render() {
    return <h1 className="jumbotron">{this.props.message}</h1>;
  }
}

export default Header;
