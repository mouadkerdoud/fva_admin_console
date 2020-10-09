import React from 'react'
import "./Mission.css"
// import TagsInput from "../../layout/TagsInput"
/* CKEditor */
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import CKEditor from "@ckeditor/ckeditor5-react"
 

export class AddMission extends React.Component {
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
    render(){
        return (
            <div className="container">
                <h1>Add Mission</h1>
    
                <form class="add-product-form forms5">
                    
                    <div className="form-flex-items">
                        <div class="main-menu">
                            <h2 class="active"><i class="fa fa-table"></i>News</h2>     
                        </div>
                    </div> 
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
                        <div className="category-element label-input">
                            
                            
                        </div>
                </form>
                 <form class="add-product-form formsbtn">
                    <button className="btn btn-add-prod">Add Event</button>
                </form>
    
            </div>
        )
    
    }    
}

export default AddMission
