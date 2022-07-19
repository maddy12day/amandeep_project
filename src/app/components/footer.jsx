/* eslint-disable jsx-a11y/anchor-is-valid */
import Logo from "../assets/images/fanclub.png";
import Insta from "../assets/images/insta.png";
import Twitter from "../assets/images/twitter.png";
import Link from "../assets/images/link.png";
import Facebook from "../assets/images/facebook.png";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const openlink=(url)=>{
    window.open(url, '_blank');
  }
  let navigate = useNavigate();
  return (
    <>
      <div className="col-md-12 row footer-container">
        <div className="col-md-2 col-sm-12 d-flex justify-content-center align-items-center logo">
          <img src={Logo} alt="img"  className="logo-image"
            onClick={() => {navigate("/")}}
          />
        </div>
        <div className="col-md-8 col-sm-12 p-0">
          <ul className="d-flex justify-content-md-around justify-content-start flex-column  flex-md-row align-items-center">
            <li>
              <a className="text" href="https://gofanclub.com/terms-and-conditions" target={'_blank'}rel="noreferrer">
                Terms
              </a>
            </li>
            <li>
              <a className="text" href="https://gofanclub.com/privacypolicy" target={'_blank'}
              rel="noreferrer">
                Privacy
              </a>
            </li>
            {/* <li>
              <a className="text" href="#">
                FAQs
              </a>
            </li> */}
            <li>
              <a className="text" href="mailto:support@gofanclub.com;">
                Contact
              </a>
            </li>
            <li>
              <a className="text" href="https://gofanclub.com/about-us" target={'_blank'}
              rel="noreferrer" >
                About us
              </a>
            </li>
            <li>
              <a className="text" href="https://gofanclub.com/nft" target={'_blank'}
              rel='noreferrer'>
                NFTs
              </a>
            </li>
            {/* <li>
              <a className="text" href="#">
                Press inquiries
              </a>
            </li> */}
            <li>
            <div className="footer-btn">
              <a className="text button-f" href="https://apps.apple.com/us/app/fanclub/id1535897256"
              target={'_blank'} rel="noreferrer" >
                Get App
              </a>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-md-2 col-sm-12 d-flex justify-content-center align-items-center social-links">
          <div className="col">
            <div className="d-flex justify-content-around">
              <div>
                <img
                  src={Facebook}
                  height="35px"
                  width="auto"
                  type="image/png"
                  alt="img"
                  className="img"
                  onClick={()=>openlink('https://www.facebook.com/FanClubtheapp')}
                />
                <img
                  src={Twitter}
                  height="35px"
                  width="auto"
                  type="image/png"
                  alt="img"
                  className="img"
                  onClick={()=>openlink('https://twitter.com/FanClubapp_')}
                />
              </div>
            </div>
            <div className="d-flex justify-content-around">
              <div>
                <img
                  src={Insta}
                  height="35px"
                  width="auto"
                  type="image/png"
                  alt="img"
                  className="img"
                  onClick={()=>openlink(' https://www.instagram.com/fanclubapp_/')}
                />
                <img
                  src={Link}
                  height="35px"
                  width="auto"
                  type="image/png"
                  alt="img"
                  className="img"
                  onClick={()=>openlink(' https://www.linkedin.com/company/fanclub/')}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
