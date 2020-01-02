import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Container from './Container'
import About from './About'
import Work from './Work'


const App = () => {
  return (
    <React.Fragment>
      <Router>
      <Switch>
        <Route exact path='/about' component={About}/>
        <Route exact path='/work' component={Work}/>
    <Route exact path='/' render={() => (
      <Container />
    )}/>
    </Switch>
    </Router>
    </React.Fragment>
  )
}

export default App
