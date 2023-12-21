import { Link, NavLink } from 'react-router-dom'
const NavBar = () => {
  return (
    <div className="nav-bar">
      <NavLink>About us</NavLink>
      <NavLink>Academy</NavLink>
      <NavLink>Bitcode</NavLink>
    </div>
  )
}
export default NavBar
