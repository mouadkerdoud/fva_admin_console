import React from 'react'
import "./News.css"
import src from "./placeholder4.png"

/* CKEditor */
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import CKEditor from "@ckeditor/ckeditor5-react"

 // MATERIAL UI
import {NewsTitle} from "../MaterialUIComponents/index"
import {MetaName, MetaKeyword, MetaDescription } from "../MaterialUIComponents/index"

export default class AddNews extends React.Component {
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


                <form >
                    <div className="addcategory-page-container">

                            <div className="side">

                                <div className="field label-input">
                                    <NewsTitle />
                                </div> 

                                <div className="label-input">
                                    <CKEditor
                                                config={{placeholder: "News Content"}} 
                                                editor={ClassicEditor}
                                                onInit={editor=>{
                                                }}
                                    />
                                </div>


                                <div className="category-element label-input">
                                    <main>
                                        <div className="formUpload">
                                            <label for="captureimage">Main Image</label>
                                            <input type="file" accept="image/*" capture="camera" id="captureimage" onChange={this.imageHandler} caption style={{display:'none'}}/>
                                        </div>
                                        <div id="imagewrapper">
                                            <input type="button" id="removeImage" onClick={this.removeImage} value="x" class="btn-rmv1" />
                                            <img id="showimage" class="image-frame"  src={this.state.profileImg} />
                                        </div>
                                    </main>
                                </div>


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



                            </div>


                            <div className="side side-second">
                    
                                <div style={{marginBottom:"3rem"}} className="label-input">
                                    <MetaName />
                                </div>

                                <div style={{marginBottom:"3rem"}} className="label-input">
                                    <MetaKeyword />
                                </div>

                                <div style={{marginBottom:"3rem"}} className="label-input">
                                    <MetaDescription /> 
                                </div>

                                <button className="btn">Add News</button>

                            </div>
                                

                    </div>




                </form>
            </div>
        )
    
    }    
}

