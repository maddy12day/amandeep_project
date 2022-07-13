import Icon from "../../assets/images/icon.png"
import Line from "../../assets/images/Line.png"
import {Link} from "react-router-dom"
import { Image } from "react-bootstrap"

const Signup = () => {
    return (
        <>
        <section className="main">
            <div className="sub-main">
                <div>
                    <div className="title">Sign Up</div>
                    <div >
                    <img src={Icon} alt="Icon" className="signup-icon"/>
                            <input type="text" placeholder="Enter invite code" className="code"/>
                    </div>
                        <div className="signup-input">
                        </div>
                        {/* <div className="image-signup">
                            <Image src={Line} />
                        </div> */}
                        <div className="verify-button">
                            <Link to="/verify">
                                <button>verify</button>
                            </Link>
                        </div>
                        <div className="para"><p>if you don't have invite code you can ask for  a </p>
                            <p>refferal from any current fanClub user</p>
                        </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Signup;