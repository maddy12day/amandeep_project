import Logo from "../assets/images/logo.webp"

const Header = () => {
    return (
        <>
  <header class="head">
		<img src={Logo} class="icon" alt="img"/>
      <div class="nav">
          <div><a href="#getstarted" class="ele">Get started</a></div>
          <div><a href="#contact" class="button-h ele">Contact</a></div>
      </div>
	</header> 
</>
    )
}
export default Header;
