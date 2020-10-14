import React from 'react'
import "./Realisation.css"
import src from "../News/placeholder4.png"

/* CKEditor */
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import CKEditor from "@ckeditor/ckeditor5-react"
 

// MATERIAL UI
import {RealisationTitle,StartDateR,EndDateR, Place, Partners} from "../MaterialUIComponents/index"
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';


class AddRealisation extends React.Component {
    state={
        profileImg:src
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
    
    removeImage = (e) => {
        e.preventDefault();
        let showimage=document.getElementById("showimage");
        showimage.setAttribute("src",src);
        e.target.classList.remove("rmvM");
        showimage.style.display="none";
   }
    render(){
        return(
                <div className="container">
                    <h1>Add Realisation</h1>
        
                    <form >
                        <div className="addcategory-page-container">
        
        
                            <div className="side">
                            <main className="mainImg">
                                <div className="formUpload">
                                    <label><span>Realisation Image</span>
                                    <IconButton color="primary" aria-label="upload picture" component="span">
                                        <PhotoCamera />
                                    </IconButton>
                                    <input type="file" accept="image/*" capture="camera" id="captureimage" onChange={this.imageHandler}  caption="true" style={{display:"none"}}  />
                                    </label>
                                </div>
                                <div id="imagewrapper">
                                    <input type="button" id="removeImage" alt="" onClick={this.removeImage} value="x" className="btn-rmv1" />
                                    <img id="showimage" className="image-frame imgr"  src={this.state.profileImg} alt="" style={{display:"block"}} />
                                </div>
                            </main>
        
                                <div className="field label-input">
                                    <RealisationTitle />
                                </div>
                                
                            </div>

                            <div className="side side-second side-seconds">
                                <div className="label-input">
                                    <CKEditor
                                                config={{placeholder: "Description"}} 
                                                editor={ClassicEditor}
                                                onInit={editor=>{
                                                }}
                                    />
                                </div>
                                <div className="dateR">
                                    <div className="field label-input dateRe">
                                        <StartDateR />
                                    </div>
        
                                    <div className="field label-input">
                                        <EndDateR />
                                    </div>
                                </div>
                                <div className="field label-input">
                                    <Place />
                                </div>

                                <div className="field label-input">
                                    <Partners />
                                </div>
                                <button type="submit"className="btn-assoc BTNS" ><span>Add Realisation</span></button>

                            </div>
                            </div>
                    </form>
                </div>
            )
    }
        
    }

export default AddRealisation
                        
                