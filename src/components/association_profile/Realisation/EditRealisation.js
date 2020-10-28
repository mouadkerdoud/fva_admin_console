import React from 'react'
import "./Realisation.css"
import src from "../News/placeholder4.png"

/* Axios */
import axios from 'axios';

/* CKEditor */
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import CKEditor from "@ckeditor/ckeditor5-react"

/* Moment */
import Moment from 'moment';

// MATERIAL UI
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import TextField from '@material-ui/core/TextField';


class EditRealisation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            descriptionR: '',
            start_at: '',
            ended_at: '',
            place: '',
            partners: '',
            image: '',
            association: 1,
            imageR: ''
        }
        this.editRealisation = this.editRealisation.bind(this);
        this.imageHandler =this.imageHandler.bind(this)
        this.handleTitle =this.handleTitle.bind(this)
        this.handleCkeditorState =this.handleCkeditorState.bind(this)
        this.handleStartR =this.handleStartR.bind(this)
        this.handleEndR =this.handleEndR.bind(this)
        this.handlePlace =this.handlePlace.bind(this)
        this.handlePartners =this.handlePartners.bind(this)
    }

    imageHandler(e){
         let showimage = document.getElementById("showimage");
        let removeImage = document.getElementById("removeImage");
        showimage.style.display = "inline-block";
        removeImage.classList.add("rmvM"); 

        var input = document.querySelector('#captureimage')   
        var file = input.files[0]
        document.querySelector('#showimage').src = URL.createObjectURL(file)
        
        this.setState({
            image: e.target.files[0]
        })

    };

    removeImage = (e) => {
        e.preventDefault();
        let showimage = document.getElementById("showimage");
        showimage.setAttribute("src", src);
        e.target.classList.remove("rmvM");
        showimage.style.display = "none";
    }

    componentDidMount(){
        const url = "http://fva-backend-dev.herokuapp.com/api/app/realisation/"+this.props.match.params.id
        fetch(url).then((response)=>{
          response.json().then((result)=>{
            this.setState({
              id:result.id,
              title:result.title,
              descriptionR:result.description,
              start_at:Moment(result.start_at).format('YYYY-MM-DDThh:mm'),
              ended_at:Moment(result.ended_at).format('YYYY-MM-DDThh:mm'),
              place:result.place,
              partners:result.partners,
              imageR:result.image
            })
          })
        })  
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

    editRealisation(e) {
        e.preventDefault();
        const url = 'http://fva-backend-dev.herokuapp.com/api/app/realisation/'+this.state.id+'/'
        const form_data = new FormData();

        form_data.append('association', this.state.association);
        form_data.append('title', this.state.title);
        form_data.append('description', this.state.description);
        form_data.append('start_at', this.state.start_at);
        form_data.append('ended_at', this.state.ended_at);
        form_data.append('place', this.state.place);
        form_data.append('partners', this.state.partners);
        if(this.state.image !==""){
            form_data.append('image', this.state.image);
        }

        try {
             axios.put(url, form_data)
             alert("Realisation Has been edited success")
             this.props.history.push("/Realisation");
        } catch (err) {
            console.log(err)
        }; 

    };

    render() {
        return (
            <div className="container">
                <h1>Edit Realisation</h1>

                <form onSubmit={this.editRealisation}>
                    <div className="addcategory-page-container">


                        <div className="side">
                            <main className="mainImg">
                                <div className="formUpload">
                                    <label><span>Realisation Image</span>
                                        <IconButton color="primary" aria-label="upload picture" component="span">
                                            <PhotoCamera />
                                        </IconButton>
                                        <input type="file" accept="image/*" capture="camera" id="captureimage" caption="true" onChange={this.imageHandler} style={{ display: "none" }} />
                                    </label>
                                </div>
                                <div id="imagewrapper">
                                    <input type="button" id="removeImage" alt="" onClick={this.removeImage} value="x" className="btn-rmv1" />
                                    <img id="showimage" className="image-frame imgr" src={this.state.imageR} alt="" style={{ display: "block" }} />
                                </div>
                            </main>

                            <div className="field label-input">
                                <TextField
                                    id="RealisationTitle"
                                    label="Realisation Title"
                                    multiline
                                    rowsMax={4}
                                    onChange={this.handleTitle}
                                    value={this.state.title}
                                />
                            </div>

                        </div>

                        <div className="side side-second side-seconds">
                            <div className="label-input">
                                <CKEditor
                                    config={{ placeholder: "Description" }}
                                    data={this.state.descriptionR}
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
                                        value={this.state.start_at}
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
                                        value={this.state.ended_at}
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
                                    value={this.state.place}
                                />
                            </div>

                            <div className="field label-input">
                                <TextField
                                    id="partners"
                                    label="partners"
                                    multiline
                                    rowsMax={4}
                                    onChange={this.handlePartners}
                                    value={this.state.partners}
                                />
                            </div>
                            <button type="submit" className="btn-assoc BTNS" ><span>Edit Realisation</span></button>

                        </div>
                    </div>
                </form>
            </div>
        )
    }

}

export default EditRealisation

