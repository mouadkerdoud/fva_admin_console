import React from 'react'
import "./Mission.css"
// import TagsInput from "../../layout/TagsInput"
/* CKEditor */
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import CKEditor from "@ckeditor/ckeditor5-react"
 

export class AddMission extends React.Component {
    state={
        profileImg:''
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
    render(){
        return (
            <div className="container">
                <h1>Add Mission</h1>
                <form className="assoc-form avatar">
                    <div className="assoc-wrapper">
                        <div className="row">
                            <div className="field label-input mt">
                                <label className="label">Mission Title*</label>
                                <input placeholder="Title..." type="text" className="data-form add-post" />
                            </div> 
                            <div className="description-element label-input">
                                <label className="label">Content*</label>
                                <CKEditor
                                            editor={ClassicEditor}
                                            onInit={editor=>{
                                            }}
                                />
                            </div>
                        </div>
                        <div className="picture-assoc assoc">
                            <div class="avatar-wrapper">
                                <img class="profile-pic" src={this.state.profileImg} /> 
                            </div>
                            <div class="button-wrapper avatar-edit">
                                <label for="imageUpload"></label>
                                <input type="file" name="upload" id="upload" class="upload-box" placeholder="Upload File" onChange={this.imageHandler} />
                            </div>    
                        </div>
                    </div>    
                    <button type="submit" className="btn-mission btn-assoc" ><span>Add Mission</span></button>

                </form>
                
            </div>    
            
        )
    
    }    
}

export default AddMission
