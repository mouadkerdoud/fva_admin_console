import React from 'react'
import "./News.css"
import src from "./placeholder4.png"



/* CKEditor */
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import CKEditor from "@ckeditor/ckeditor5-react"

// MATERIAL UI
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';


export default class AddNews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id:'',
            title: '',
            content: '',
            main_image: null,
            thumbnail_image: null,
            meta_title: '',
            meta_keyword: ''
        }
    }
    imageHandler = (e) => {
        const reader = new FileReader();
        let showimage = document.getElementById("showimage");
        let removeImage = document.getElementById("removeImage");
        showimage.style.display = "inline-block";
        removeImage.classList.add("rmvM");

        reader.onload = () => {
            if (reader.readyState === 2) {
                this.setState({ main_image: reader.result })
            }
        }
        reader.readAsDataURL(e.target.files[0])
    };

    imageHandler2 = (e) => {
        const reader = new FileReader();
        let showimage = document.getElementById("showimage2");
        let removeImage = document.getElementById("removeImage2");
        showimage.style.display = "inline-block";
        removeImage.classList.add("rmvM2");

        reader.onload = () => {
            if (reader.readyState === 2) {
                this.setState({ thumbnail_image: reader.result })
            }
        }
        reader.readAsDataURL(e.target.files[0])
    };

    componentDidMount(){
        const url = "http://fva-backend-dev.herokuapp.com/api/app/news/"+this.props.match.params.id
        fetch(url).then((response)=>{
          response.json().then((result)=>{
            this.setState({
              id:result.id,
              title:result.title,
              content:result.content,
              main_image:result.main_image,
              thumbnail_image:result.thumbnail_image,
              meta_title:result.meta_title,
              meta_keyword:result.meta_keyword
            })
          })
        })  
    }

    removeImage = (e) => {
        e.preventDefault();
        let showimage = document.getElementById("showimage");
        showimage.setAttribute("src", src);
        e.target.classList.remove("rmvM");
        showimage.style.display = "none";
    }

    removeImage2 = (e) => {
        e.preventDefault();
        let showimage = document.getElementById("showimage2");
        showimage.setAttribute("src", src);
        e.target.classList.remove("rmvM2");
        showimage.style.display = "none";
    }

    handleCkeditorState = (event, editor) => {
        const data = editor.getData();

        this.setState({
            content: data.replace(/<[^>]*>?/gm, '')
        })
    }
    
    Update(){
        console.log(this.state);
       const url = "http://fva-backend-dev.herokuapp.com/api/app/news/"+this.state.id+"/"
       fetch(url,{
           method: 'PUT',
           headers: { 'Content-Type': 'application/json' },
           body: JSON.stringify(this.state)
       })
       .then((result)=>{
           result.json().then((resp)=>{
               alert('News has been Edited');
           })
       })
       /* window.location.href="/News" */
     }

    render() {

        return (
            <div className="container">
                <h1>Add News</h1>


                <form >
                    <div className="addcategory-page-container">

                        <div className="side">
                            <div className="field label-input">
                                <main>
                                    <div className="formUpload">
                                        <label><span>Main Image</span>
                                            <IconButton color="primary" aria-label="upload picture" component="span">
                                                <PhotoCamera />
                                            </IconButton>
                                            <input type="file" accept="image/*" capture="camera" id="captureimage" onChange={this.imageHandler} caption="true" style={{ display: "none" }} />
                                        </label>
                                    </div>
                                    <div id="imagewrapperI">
                                        <input type="button" id="removeImage" alt="" onClick={this.removeImage} value="x" className="btn-rmv1" />
                                        <img id="showimage" className="image-frame" src={this.state.main_image}
                                            alt="" />
                                    </div>
                                </main>
                            </div>


                            <div className="field label-input">
                                <TextField
                                    id="standard-multiline-flexible"
                                    label="News Title"
                                    multiline
                                    rowsMax={4}
                                    onChange={(e) => { this.setState({ title: e.target.value }) }}
                                    value={this.state.title}
                                />
                            </div>

                            <div className="label-input">
                                <CKEditor
                                    config={{ placeholder: "News Content" }}
                                    data={this.state.content}
                                    editor={ClassicEditor}
                                    onInit={editor => {
                                    }}
                                    onChange={this.handleCkeditorState}
                                />
                            </div>

                        </div>


                        <div className="side side-second">


                            <div className=" field label-input">

                                <div className="formUpload newsform">
                                    <label className="lbl"><span>Thumbnail Image</span>
                                        <input type="file" accept="image/*" capture="camera" id="captureimage" onChange={this.imageHandler2} caption="true" style={{ display: "none" }} />
                                        <IconButton color="primary" aria-label="upload picture" component="span">
                                            <PhotoCamera />
                                        </IconButton>
                                    </label>
                                </div>
                                <div id="imagewrapperI">
                                    <input type="button" id="removeImage2" alt="" onClick={this.removeImage2} value="x" className="btn-rmv1" />
                                    <img id="showimage2" className="image-frame" src={this.state.thumbnail_image}
                                        alt="" />
                                </div>
                            </div>

                            <div style={{ marginBottom: "3rem" }} className="label-input">
                                <TextField
                                    id="standard-multiline-flexible"
                                    placeholder="Meta Title"
                                    multiline
                                    rowsMax={4}
                                    onChange={(e) => { this.setState({ meta_title: e.target.value }) }}
                                    value={this.state.meta_title}
                                />
                            </div>

                            <div style={{ marginBottom: "3rem" }} className="label-input meta_DK">
                                <TextField
                                    id="outlined-textarea"
                                    placeholder="Meta Keywords"
                                    multiline
                                    variant="outlined"
                                    rowsMax={4}
                                    onChange={(e) => { this.setState({ meta_keyword: e.target.value }) }}
                                    value={this.state.meta_keyword}
                                />
                            </div>

                            <button className="btn" onClick={() => { this.Update() }} type="button">Edit News</button>

                        </div>

                    </div>

                </form>
            </div>
        )

    }
}

