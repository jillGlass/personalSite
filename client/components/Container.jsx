import React from "react";
import Nav from "./Nav";
import Main from "./Main";

class Container extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <Main />
      </React.Fragment>
    );
  }
}

export default Container;
