import React from "react"
import { Link, HashRouter as Router } from "react-router-dom"
import Nav from './Nav'
import Main from './Main'

class Container extends React.Component {
    render() {
      return (
        <React.Fragment>
          <Router>
            <Nav />
            <Main />
          </Router>
        </React.Fragment>
      )
    }
  }
  
  export default Container