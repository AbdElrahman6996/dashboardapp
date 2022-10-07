import React from 'react'
import Dashboard from './Dashboard';
import Fortget from './Fortget';
import Login from './Login';

const App = () => {
  let components
  switch (window.location.pathname) {
    case "/":
      components = <Login />
      break;

    case "/dashboard":
      components = <Dashboard />
      break;
    case "/forget":
      components = <Fortget />
      break;
    default:
      components = <Login />
      break;

  }
  console.log(window.location.pathname)
  return (
    <>
      {components}
    </>
  )
}

export default App