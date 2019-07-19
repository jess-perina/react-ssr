import React from 'react'
import { Route } from 'react-router'
import Home from './components/Home'

const Routes = () => {
  return (
    <div>
      <Route exact path="/" component={Home} />
    </div>
  )
}

export default Routes
