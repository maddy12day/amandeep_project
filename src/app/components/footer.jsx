/* eslint-disable jsx-a11y/anchor-is-valid */
import Logo from "../assets/images/fanclub.png";
import Insta from "../assets/images/insta.png";
import Twitter from "../assets/images/twitter.png";
import Link from "../assets/images/link.png";
import Facebook from "../assets/images/facebook.png";

const Footer = () => {
  return (
    <>
      <div className="col-md-12 row footer-container">
        <div className="col-md-2 col-sm-12 d-flex justify-content-center align-items-center logo">
          <img src={Logo} alt="img" />
        </div>
        <div className="col-md-8 col-sm-12">
          <ul className="d-flex justify-content-md-around justify-content-start flex-column  flex-md-row align-items-center">
          <div className="footer-list list-footer">
            <li>
              <a className="text" href="#">
                Terms
              </a>
            </li>
            <li>
              <a className="text" href="#">
                Privacy
              </a>
            </li>
            <li>
              <a className="text" href="#">
                FAQs
              </a>
            </li>
            <li>
              <a className="text" href="#">
                Contact
              </a>
            </li>
            <li>
              <a className="text" href="#">
                About us
              </a>
            </li>
            <li>
              <a className="text" href="#">
                NFTs
              </a>
            </li>
            <li>
              <a className="text" href="#">
                Press inquiries
              </a>
            </li>
            </div>
            <li>
            <div className="footer-btn">
              <a className="text button-f" href="#">
                Get App
              </a>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-md-2 col-sm-12 d-flex justify-content-center align-items-center">
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
                />
                <img
                  src={Twitter}
                  height="35px"
                  width="auto"
                  type="image/png"
                  alt="img"
                  className="img"
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
                />
                <img
                  src={Link}
                  height="35px"
                  width="auto"
                  type="image/png"
                  alt="img"
                  className="img"
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
