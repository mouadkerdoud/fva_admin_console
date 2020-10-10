import React from 'react'
import "./News.css"
import src from "./placeholder4.png"
// import TagsInput from "../../layout/TagsInput"
/* CKEditor */
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import CKEditor from "@ckeditor/ckeditor5-react"
 

export class AddNews extends React.Component {
    state={
        profileImg:src,
        profileImg2:src,
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
  imageHandler2 = (e) => {
    const reader = new FileReader();
    reader.onload = () =>{
      if(reader.readyState === 2){
        this.setState({profileImg2: reader.result})
      }
    }
    reader.readAsDataURL(e.target.files[0])
  };
    render(){
        return (
            <div className="container">
                <h1>Add News</h1>
    
                <div className="formPost">
                <form class="add-product-form forms3">
                    
                    <div className="form-flex-items">
                        <div class="main-menu">
                            <h2 class="active"><i class="fa fa-table"></i>News</h2>     
                        </div>
                    </div> 
                    <div className="field label-input mt">
                            <label className="label">News Title*</label>
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
                            <label className="label">Main Image*</label>

                            {/* Upload Image*/}
                            <form id="file-upload-form" class="uploader">
                                <input id="file-upload" type="file" name="fileUpload" onChange={this.imageHandler} accept="image/*" />
                                
                                <label for="file-upload" id="file-drag">
                                    <img id="file-image" src={this.state.profileImg} alt="Preview" className="hidden" />
                                    <div id="start">
                                        <i class="fa fa-download" aria-hidden="true"></i>
                                    </div>
                                </label>
                            </form>
                        </div>
                </form>
                <form class="add-product-form forms4">
                    <div className="category-element label-input">
                            <label className="label">Thumbnail Image*</label> 
                            <div class="wrapper">
                                <div class="box">
                                    <img class="js--image-preview" src={this.state.profileImg2}/>
                                    <div class="upload-options">
                                    <label>
                                        <input type="file" class="image-upload" accept="image/*" onChange={this.imageHandler2}/>
                                    </label>
                                    </div>
                                </div>
                                </div>
                        </div>        
                    <div className="form-flex-items formeta">
                    <div class="main-menu">
                        <h2 class="active"><i class="fa fa-briefcase"></i>Meta</h2>     
                    </div>
                    </div>
                    <div className="field label-input fields">
                        <label className="label">Meta Title*</label>
                        <input placeholder="Title..." type="text" className="data-form add-meta" />
                    </div>
                    
                    <div className="description-element label-input desc">
                        <label className="label">Meta Keywords:  *</label>
                        <textarea placeholder="Meta Keywords..." rows="10" className="add-meta" />
                    </div>
                                           
                </form>
    
                </div>
                <form class="form-event">
                    <button type="submit"className="btn-assoc" ><span>Add News</span></button>

                </form>
    
            </div>
        )
    
    }    
}

export default AddNews
