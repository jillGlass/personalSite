import React from "react";
import NavInner from "./NavInner";
import Main from "./Main";
import Footer from "./Footer";

class Container extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavInner />
        <Main />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Container;
