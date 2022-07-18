import Logo from "../assets/images/logo.webp"

const Header = () => {
    return (
        <>
  <header className="head">
  <div>
		<img src={Logo} className="icon" alt="img"/>
        </div>
      <div className="nav">
          <a href="mailto:support@gofanclub.com" className="button-h ele">Contact</a>
      </div>
	</header> 
</>
    )
}
export default Header;
