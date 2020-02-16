import React from "react";
import NavInner from "./NavInner";
import Main from "./Main";

class Container extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavInner />
        <Main />
      </React.Fragment>
    );
  }
}

export default Container;
