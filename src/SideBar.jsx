import { NavLink } from 'react-router-dom'

const SideBar = () => {
  return (
    <nav className="side-bar">
      <NavLink>Login</NavLink>
      <NavLink>Sign up</NavLink>
      <NavLink>Academy</NavLink>
      <NavLink>About Us</NavLink>
      <NavLink>Bitcode</NavLink>
    </nav>
  )
}
export default SideBar
