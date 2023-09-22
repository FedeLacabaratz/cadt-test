import React from "react"
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom"
import Sidebar from "./components/Sidebar"
import Designs from "./views/Designs"
import Setouts from "./views/Setouts"

const App = () => {
  return (
    <Router>
      <main className="mainContainer" data-testid="app">
        <Sidebar />
        <Switch>
          <Route path="/designs" component={Designs} />
          <Route path="/setouts" component={Setouts} />
          <Redirect from="/" to="/designs" />
        </Switch>
      </main>
    </Router>
  )
}

export default App
