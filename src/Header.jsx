import logo from './Images/Icon.svg'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header-flex">
      <div className="header-logo">
        <img src={logo} className="logo" alt="header-logo" />
        <div className="logo-text">
          <h2>BitBarter</h2>
          <p>simplifying global payment</p>
        </div>
      </div>
      <div className="navbar">
        <NavLink>About us</NavLink>
        <NavLink>Academy</NavLink>
        <NavLink>Bitcode</NavLink>
      </div>
      <div className="sign-in">
        <button id="btn-login">Login</button>
        <button id="btn-signup">Create New Account</button>
      </div>
    </div>
  )
}
export default Header
