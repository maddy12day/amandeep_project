import Logo from "../assets/images/logo.webp"
import { useNavigate } from "react-router-dom";
const Header = () => {
    let navigate = useNavigate();
    return (
        <>
  <header className="head">
  <div>
		<img src={Logo} className="icon " alt="img"
             onClick={() => {navigate("/")}}
        />
        </div>
      <div className="nav">
          <a href="mailto:support@gofanclub.com" className="button-h ele custom-contact">Contact</a>
      </div>
	</header> 
</>
    )
}
export default Header;
