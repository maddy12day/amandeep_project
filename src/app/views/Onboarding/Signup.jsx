import Icon from "../../assets/images/icon.png"
import Line from "../../assets/images/Line.png"

const Signup = () => {
    return (
        <>
        <section className="main">
            <div className="sub-main">
                <div>
                    <div className="title">Sign Up</div>
                        <div>
                            <img src={Icon} alt="Icon"/>
                            <input type="text" placeholder="Enter invite code" className="code"/>
                        </div>
                        <div>
                            <img src={Line} alt="line" />
                        </div>
                        <div className="verify-button">
                            <button>verify</button>
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