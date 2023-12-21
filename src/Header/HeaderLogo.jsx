import logo from '../Images/Icon.svg'
const HeaderLogo = () => {
  return (
    <div className="header-logo">
      <img src={logo} className="logo" alt="header-logo" />
      <div className="logo-text">
        <h2>BitBarter</h2>
        <p>simplifying global payment</p>
      </div>
    </div>
  )
}
export default HeaderLogo
