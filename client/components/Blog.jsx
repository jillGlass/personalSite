import React from "react";
import NavInner from "./NavInner";

class Blog extends React.Component {
  render() {
    return (
      <div>
        <NavInner />
        <div className="container-blog blog-background">
          <header className="title">
            <img src="../images/blogfancy.svg" alt="blog icon" height="130" />
          </header>
          <h3 className="blog-entry-title">
            August 2019 - EDA Foundations
          </h3>
          </div>
      </div>
    );
  }
}

export default Blog;
