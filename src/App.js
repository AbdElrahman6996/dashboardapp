import React from 'react'
import Dashboard from './Dashboard';
import Fortget from './Forget';
import Login from './Login';
import ResetPassword from './Forget Component/ResetPassword'
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
    case "/forget/resetpassword":
      components = <ResetPassword />
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