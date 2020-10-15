import React, { Component } from 'react';
import { AssociationName, EmailA, Phone, Fax, AddressA, CityA, CountryA, FacebookLink, InstagramLink, LinkedinLink, AssociationDescription, AboutUs } from '../MaterialUIComponents';
import "./Association.css"


export class Association extends Component {
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
            <h1>Association Profile</h1>
            <form className="assoc-form">
                <div className="assoc-wrapper">


                    <div className="picture-assoc">
                        <img id="profile-pic-assoc" src={profileImg} alt="Profile" />
                        <div className="button-wrapper">
                            <div className="button-wrapper avatar-edit assoc-edit">
                                <input type="file" name="upload" id="upload" className="upload-box" placeholder="Upload File" onChange={this.imageHandler} />
                            </div> 
                            <input type="file" name="upload" id="upload" className="upload-box" placeholder="Upload File" onChange={this.imageHandler} />
                        </div> 

                    </div>

                    <div className="row inps">
                        <div className="col label-input rows">
                            <AssociationName />
                        </div>

                        <div className="col label-input">
                            <EmailA />
                        </div>

                        <div className="col label-input rows">
                            <Phone />
                        </div>

                        <div className="col label-input">
                            <Fax />
                        </div>

                        <div className="col label-input rows">
                            <AddressA />
                        </div>

                        <div className="col label-input">
                            <FacebookLink />
                        </div>

                        <div className="col label-input rows">
                            <InstagramLink />
                        </div>

                        <div className="col label-input rows">
                            <LinkedinLink />
                        </div>

                        <div className="col label-input">
                            <CountryA />
                        </div>

                        <div className="col label-input rows">
                            <CityA />
                        </div>

                        <div className="col label-input">
                            <AssociationDescription />
                        </div>

                        <div className="col label-input rows">
                            <AboutUs />
                        </div>

                    </div>
                </div>
                <button type="submit"className="btn-assoc" ><span>Update</span></button>
            </form>
        </div>
    )
	}
}

export default Association;






