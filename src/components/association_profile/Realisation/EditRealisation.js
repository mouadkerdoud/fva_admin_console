import React from 'react'
import "./Realisation.css"
import src from "../News/placeholder4.png"

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
            start_at: '',
            ended_at: '',
            place: '',
            partners: '',
            image: src
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
                this.setState({ image: reader.result })
            }
        }
        reader.readAsDataURL(e.target.files[0])
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
              description:result.description,
              start_at:Moment(result.start_at).format('YYYY-MM-DDThh:mm'),
              ended_at:Moment(result.ended_at).format('YYYY-MM-DDThh:mm'),
              place:result.place,
              partners:result.partners,
              image:result.image
            })
          })
        })  
    }

    handleCkeditorState = (event, editor) => {
        const data = editor.getData();

        this.setState({
            content: data.replace(/<[^>]*>?/gm, '')
        })
    }

    Update(){
         console.log(this.state);
        const url = "http://fva-backend-dev.herokuapp.com/api/app/realisation/"+this.state.id+"/"
        fetch(url,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state)
        })
        .then((result)=>{
            result.json().then((resp)=>{
                alert('Realisation has been Edited');
            })
        })
         /* window.location.href="/Realisation" */
      }

    render() {
        return (
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
                                        <input type="file" accept="image/*" capture="camera" id="captureimage" onChange={this.imageHandler} caption="true" style={{ display: "none" }} />
                                    </label>
                                </div>
                                <div id="imagewrapper">
                                    <input type="button" id="removeImage" alt="" onClick={this.removeImage} value="x" className="btn-rmv1" />
                                    <img id="showimage" className="image-frame imgr" src={this.state.image} alt="" style={{ display: "block" }} />
                                </div>
                            </main>

                            <div className="field label-input">
                                <TextField
                                    id="RealisationTitle"
                                    label="Realisation Title"
                                    multiline
                                    rowsMax={4}
                                    onChange={(e) => { this.setState({ title: e.target.value }) }}
                                    value={this.state.title}
                                />
                            </div>

                        </div>

                        <div className="side side-second side-seconds">
                            <div className="label-input">
                                <CKEditor
                                    config={{ placeholder: "Description" }}
                                    data={this.state.description}
                                    editor={ClassicEditor}
                                    onInit={editor => {
                                    }}
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
                                        onChange={(e) => { this.setState({ start_at: e.target.value }) }}
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
                                        onChange={(e) => { this.setState({ ended_at: e.target.value }) }}
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
                                    onChange={(e) => { this.setState({ place: e.target.value }) }}
                                    value={this.state.place}
                                />
                            </div>

                            <div className="field label-input">
                                <TextField
                                    id="partners"
                                    label="partners"
                                    multiline
                                    rowsMax={4}
                                    onChange={(e) => { this.setState({ partners: e.target.value }) }}
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

