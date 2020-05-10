import React from "react";

class Footer extends React.Component {
  render() {
    return <div classname="footer">{this.props.message}</div>;
  }
}

export default Footer;
