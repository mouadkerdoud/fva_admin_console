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
    let showimage=document.getElementById("showimage");
    let removeImage=document.getElementById("removeImage");
    showimage.style.display="inline-block";
    removeImage.classList.add("rmvM");

    reader.onload = () =>{
      if(reader.readyState === 2){
        this.setState({profileImg: reader.result})
      }
    }
    reader.readAsDataURL(e.target.files[0])
  };
  
  imageHandler2 = (e) => {
    const reader = new FileReader();
    let btnremove=document.getElementById("removeImage1");
    btnremove.classList.add("rmv");
    reader.onload = () =>{
      if(reader.readyState === 2){
        this.setState({profileImg2: reader.result})
      }
    }
    reader.readAsDataURL(e.target.files[0])
  };
  removeImage = (e) => {
    e.preventDefault();
    let showimage=document.getElementById("showimage");
    showimage.setAttribute("src",src);
     e.target.classList.remove("rmvM");
    showimage.style.display="none";

   }
  removeImage2 = (e) => {
    e.preventDefault();
    let imageReview=document.getElementById("preview");
    imageReview.setAttribute("src",src);
     e.target.classList.remove("rmv");
   }
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
                            <main>
                                <form className="formUpload">
                                    <label for="captureimage">Upload image</label>
                                    <input type="file" accept="image/*" capture="camera" id="captureimage" onChange={this.imageHandler} caption style={{display:'none'}}/>
                                </form>
                                <div id="imagewrapper">
                                    <input type="button" id="removeImage" onClick={this.removeImage} value="x" class="btn-rmv1" />
                                    <img id="showimage" class="image-frame"  src={this.state.profileImg} />
                                </div>
                            </main>
                        </div>
                </form>
                <form class="add-product-form forms4">
                    <div className="category-element label-input">
                            <label className="label">Thumbnail Image*</label> 
                            <div class="wrapper">
                                <div class="box">
                                    <img class="js--image-preview" id="preview" src={this.state.profileImg2}/>
                                    <input type="button" id="removeImage1" onClick={this.removeImage2} value="x" class="btn-rmv1" />
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
