import Select from "../../components/forms/select";
const Profile = ()=>{
  return(
    <>
    <div className="con">
    <div className="profile-container">
    <div className="profile-heading">
     <h1>Verify yourself</h1>
    </div>
    <div className="progress">
    <span className="progress1 progress-complete"></span>
    <span className="progress1"></span>
    <span className="progress1"></span>
    </div>
    <div className="profile-select">
    <Select selectClass={"start-select"} dataArr={[{label:'option 1',value:'option1'}]}/>
    </div>
    <div className="profile-paragraph">
      <p>Add display name (optional)</p>
    </div>
    <div className="form-container">
     <form >
      <div className="form-radio">
      <input type="radio" id="user" name="radio_1" value="username" checked="checked"/>
      <label for="user">Username</label>
      </div>
      <div className="form-radio">
      <input type="radio" id="full" name="radio_2" value="fullname"/>
      <label for="full">Full Name</label>
      </div>
      <div className="form-radio">
      <input type="radio" id="show" name="radio_3" value="showname"/>
      <label for="show">Show Name</label>
      </div>
     </form>
     </div>
     <div className="profile-btn">
     <button type="submit">Continue</button>
    </div>
    </div>
    </div>
    </>
  )
}

export default Profile;