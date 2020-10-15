import React, { Component } from 'react';
import { FirstNameU,LastNameU,PhoneUser,EmailUser,PasswordUser,ConfirmPasswordUser,DateUser,CountryUser,CityUser,RoleUser,AddressUser } from '../association_profile/MaterialUIComponents';
import "./User.css"

export class Profile extends Component {
    state={
        profileImg:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
      }
  
	render() {
    const { profileImg} = this.state
    return (
        <div className="container">
            <h1>Profile</h1>
            <form className="assoc-form">
                <div className="assoc-wrapper">


                    <div className="picture-assoc">
                        <img id="profile-pic-assoc" src={profileImg} alt="Profile" />
                    </div> 

                    

                    <div className="row inps">
                        <div className="col label-input rows">
                            <FirstNameU />
                        </div>

                        <div className="col label-input">
                            <LastNameU />
                        </div>
                        
                        <div className="col label-input">
                            <EmailUser />
                        </div>

                        <div className="col label-input rows">
                            <PhoneUser />
                        </div>

                        <div className="col label-input rows">
                            <PasswordUser />
                        </div>

                        <div className="col label-input rows">
                            <ConfirmPasswordUser />
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

                        <div className="col label-input rows">
                            <DateUser />
                        </div>

                        <div className="col label-input rows">
                            <CountryUser />
                        </div>

                        <div className="col label-input rows">
                            <CityUser />
                        </div>

                        <div className="col label-input rows">
                            <RoleUser />
                        </div>

                        <div className="col label-input rows">
                            <AddressUser />
                        </div>

                    </div>
                </div>
                <button type="submit"className="btn-assoc" ><span>Edit Profile</span></button>
            </form>
        </div>
    )
	}
}

export default Profile;






