import { FaBars, FaTimes } from 'react-icons/fa'
import logo from './Images/Icon.svg'
import { NavLink } from 'react-router-dom'

const Header = ({ width, toggleHead, setToggleHead }) => {
  return (
    <div className="header-flex">
      <div className="header-logo">
        <img src={logo} className="logo" alt="header-logo" />
        <div className="logo-text">
          <h2>BitBarter</h2>
          <p>simplifying global payment</p>
        </div>
      </div>
      {width >= 500 ? (
        <div>
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
      ) : (
        <div>
          <button
            className="header-icon-btn"
            onClick={() => setToggleHead(!toggleHead)}
          >
            {toggleHead ? (
              <FaTimes className="header-icon" />
            ) : (
              <FaBars className="header-icon" />
            )}
          </button>
        </div>
      )}
    </div>
  )
}
export default Header
