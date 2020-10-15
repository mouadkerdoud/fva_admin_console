import React, { Component } from 'react';
import "./User.css"
import {Emails, FirstName, Password,LastName,ConfirmPassword,PhoneNumber, Role, Country, City, DateBirthday, Address} from "../association_profile/MaterialUIComponents/index"

export class AddUser extends Component {
    state={
        profileImg:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
      }
  imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () =>{
      if(reader.readyState === 2){
        this.setState({profileImg: reader.result})
      }
    }
    reader.readAsDataURL(e.target.files[0])
  };
	render() {
    const { profileImg} = this.state
    return (
        <div className="container">
            <h1>Add User</h1>
            <form className="assoc-form">
                <div className="assoc-wrapper">
                    <div className="picture-assoc">
                        <img id="profile-pic-assoc" src={profileImg} alt="Profile" />
                        <div className="button-wrapper avatar-edit user-edit">
                            <label ></label>
                            <input type="file" name="upload" id="upload" className="upload-box" placeholder="Upload File" onChange={this.imageHandler} />
                        </div> 
                    </div>

                    <div className="row">
                        <div className="col label-input">
                            <FirstName />
                        </div>

                        <div className="col label-input">
                            <LastName />
                        </div>

                        <div className="col label-input">
                            <Emails />
                        </div>

                        <div className="col label-input">
                            <PhoneNumber />
                        </div>

                        <div className="col label-input">
                            <Password />
                        </div>

                        <div className="col label-input">
                            <ConfirmPassword />
                        </div>

                        <div className="col label-input">
                            <label className="label">Gender*</label>
                            <div className="form-item">
                                <div className="form-gender">
                                    <label className="gender">
                                        <input type="radio" name="gender" />
                                        <span className="male">Male</span>
                                    </label>
                                    <label className="gender">
                                        <input type="radio" name="gender" />
                                        <span className="female">Female</span>
                                    </label>
                                    <label className="gender">
                                        <input type="radio" name="gender" />
                                        <span className="other">Other</span>
                                    </label>
                                </div>   
                            </div>
                        </div>

                        <div className="col label-input">
                            <DateBirthday />
                        </div>      

                        <div className="col label-input">
                            <Country />
                        </div>
                        <div className="col label-input">
                            <City />
                        </div>
                        <div className="col label-input">
                            <Role />
                        </div>
                        <div className="col label-input">
                            <Address />
                        </div>
                        </div>
                    </div>
                <button type="submit"className="btn-assoc" ><span>Add User</span></button>
            </form>
        </div>
    )
	}
}

export default AddUser;






