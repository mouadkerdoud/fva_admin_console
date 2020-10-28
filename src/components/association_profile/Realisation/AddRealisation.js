import React from 'react'
import "./Realisation.css"
import src from "../News/placeholder4.png"
import axios from 'axios';

/* CKEditor */
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import CKEditor from "@ckeditor/ckeditor5-react"


// MATERIAL UI
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import TextField from '@material-ui/core/TextField';


class AddRealisation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            start_at: '',
            ended_at: '',
            place: '',
            partners: '',
            image: '',
            association: 1
        }

        this.addRealisation = this.addRealisation.bind(this);
        this.imageHandlerR =this.imageHandlerR.bind(this)
        this.handleTitle =this.handleTitle.bind(this)
        this.handleCkeditorState =this.handleCkeditorState.bind(this)
        this.handleStartR =this.handleStartR.bind(this)
        this.handleEndR =this.handleEndR.bind(this)
        this.handlePlace =this.handlePlace.bind(this)
        this.handlePartners =this.handlePartners.bind(this)
    }

    imageHandlerR(e){
        let showimageR = document.getElementById("showimageR");
        let removeImage = document.getElementById("removeImage");
        showimageR.style.display = "inline-block";
        removeImage.classList.add("rmvM");

        var input = document.querySelector('#captureimageR')   
        var file = input.files[0]
        document.querySelector('#showimageR').src = URL.createObjectURL(file)
        this.setState({
            image: e.target.files[0]
        })
        console.log(this.state.image)

    };

    removeImage = (e) => {
        e.preventDefault();
        let showimageR = document.getElementById("showimageR");
        showimageR.setAttribute("src", src);
        e.target.classList.remove("rmvM");
        showimageR.style.display = "none";
    }

    handleTitle(e){
        this.setState({ title: e.target.value })    
    }

    handleCkeditorState(event, editor){
        const description = editor.getData();

        this.setState({
            description: description.replace(/<[^>]*>?/gm, '')
        })
    }
    
    handleStartR(e){
        this.setState({ start_at: e.target.value })    
    }

    handleEndR(e){
        this.setState({ ended_at: e.target.value })    
    }

    handlePlace(e){
        this.setState({ place: e.target.value })    
    }

    handlePartners(e){
        this.setState({ partners: e.target.value })   
    }

    addRealisation(e) {
        e.preventDefault();
        console.log(this.state);
        const url = "http://fva-backend-dev.herokuapp.com/api/app/realisation/"
        const form_data = new FormData();

        form_data.append('association', this.state.association);
        form_data.append('title', this.state.title);
        form_data.append('description', this.state.description);
        form_data.append('image', this.state.image);
        form_data.append('start_at', this.state.start_at);
        form_data.append('ended_at', this.state.ended_at);
        form_data.append('place', this.state.place);
        form_data.append('partners', this.state.partners);

        try {
             axios.post(url, form_data)
             alert("Realisation Has been added success")
             this.props.history.push("/Realisation");
        } catch (err) {
            console.log(err)
        }; 

    };

    render() {
        return (
            <div className="container">
                <h1>Add Realisation</h1>

                <form onSubmit={this.addRealisation}>
                    <div className="addcategory-page-container realisation">


                        <div className="side">
                            <main className="mainImg">
                                <div className="formUpload">
                                    <label><span>Realisation Image</span>
                                        <IconButton color="primary" aria-label="upload picture" component="span">
                                            <PhotoCamera />
                                        </IconButton>
                                        <input type="file" id="captureimageR" onChange={this.imageHandlerR} style={{ display: "none" }} />
                                    </label>
                                </div>
                                <div id="imagewrapper">
                                    <input type="button" id="removeImage" alt="" onClick={this.removeImage} value="x" className="btn-rmv1" />
                                    <img id="showimageR" className="image-frame imgr" src={src} alt="" style={{ display: "block" }} />
                                </div>
                            </main>

                            <div className="field label-input">
                                <TextField
                                    id="RealisationTitle"
                                    label="Realisation Title"
                                    multiline
                                    rowsMax={4}
                                    onChange={this.handleTitle}
                                />
                            </div>

                        </div>

                        <div className="side side-second side-seconds">
                            <div className="label-input">
                                <CKEditor
                                    config={{ placeholder: "Description" }}
                                    editor={ClassicEditor}
                                    onInit={editor => {
                                    }}
                                    onChange={this.handleCkeditorState}
                                />
                            </div>
                            <div className="dateR">
                                <div className="field label-input dateRe">
                                    <TextField
                                        id="datetime-local"
                                        label="Starting Date"
                                        type="datetime-local"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        onChange={this.handleStartR}
                                        />
                                </div>

                                <div className="field label-input">
                                    <TextField
                                        id="datetime-local"
                                        label="Ending Date"
                                        type="datetime-local"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        onChange={this.handleEndR}
                                    />
                                </div>
                            </div>
                            <div className="field label-input">
                                <TextField
                                    id="place"
                                    label="Place"
                                    multiline
                                    rowsMax={4}
                                    onChange={this.handlePlace}
                                    />
                            </div>

                            <div className="field label-input">
                                <TextField
                                    id="partners"
                                    label="partners"
                                    multiline
                                    rowsMax={4}
                                    onChange={this.handlePartners}
                                />
                            </div>
                            <button className="btn btn-assoc"  type="submit">Add Realisation</button>

                        </div>
                    </div>
                </form>
            </div>
        )
    }

}

export default AddRealisation

