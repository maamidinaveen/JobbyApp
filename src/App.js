import {Route, Redirect, Switch} from 'react-router-dom'

import ProtectedRoute from './ProtectedRoute'

import NotFound from './NotFound'

import Job from './Job'

import SpecificJobCard from './SpecificJobCard'

import Home from './Home'

import Login from './Login'

import './App.css'

// These are the lists used in the application. You can move them to any component needed.

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/jobs" component={Job} />
    <ProtectedRoute exact path="/jobs/:id" component={SpecificJobCard} />
    <Route exact path="/not-found" component={NotFound} />
    <Redirect to="/not-found" />
  </Switch>
)

export default App
