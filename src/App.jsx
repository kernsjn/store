import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Items from './pages/Items'
// import Page2 from './pages/Page2'
import HomePage from './pages/HomePage'
// import Display from './pages/Display'

const App = () => {
  return (
    <Router>
      <header>
        <h1>Store Inventory</h1>
      </header>
      <Switch>
        <Route exact path="/" component={Items}></Route>
        {/* <Route exact path="/:id" component={Items}></Route> */}
        {/* <Route exact path="/display" component={Display}></Route> */}
      </Switch>
    </Router>
  )
}

export default App
