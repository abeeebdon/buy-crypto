import HeaderLogo from './HeaderLogo'
import NavBar from './NavBar'
import SignIn from './SignIn'
const Header = () => {
  return (
    <div className="header-flex">
      <HeaderLogo />
      <NavBar />
      <SignIn />
    </div>
  )
}
export default Header
