import React from "react";

function Button(props) {
  return <button className="btn btn-warning">{props.children}</button>;
}

export default Button;
