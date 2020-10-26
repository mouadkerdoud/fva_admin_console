import React from 'react'
import "./Mission.css"
import axios from 'axios';
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import CKEditor from "@ckeditor/ckeditor5-react"
import src from'./user-icon-placeholder.png'
import TextField from '@material-ui/core/TextField';

export class AddMission extends React.Component {
    
    constructor() {
        super();
        this.state = {
            title: '',
            content: '',
            avatar: '',
            association:1
        }
        this.addMission = this.addMission.bind(this);
        this.handleTitle = this.handleTitle.bind(this);
        this.handleCkeditorState =this.handleCkeditorState.bind(this)
        this.imageHandler = this.imageHandler.bind(this);

    }


    imageHandler(e){
        var input = document.querySelector('#upload')   
        var file = input.files[0]
        document.querySelector('#avatarI').src = URL.createObjectURL(file)
        this.setState({
            avatar: e.target.files[0]
        })
        console.log(this.state.avatar)
    };

    handleTitle(e){
        this.setState({ title: e.target.value }) 
    }

    handleCkeditorState(event, editor){
        const content = editor.getData();

        this.setState({
            content: content.replace(/<[^>]*>?/gm, '')
        })
    }

     addMission(e) {
        e.preventDefault();
        console.log(this.state);
        const url = 'http://fva-backend-dev.herokuapp.com/api/app/mission/'
        const form_data = new FormData();

        form_data.append('association', this.state.association);
        form_data.append('title', this.state.title);
        form_data.append('content', this.state.content);
        form_data.append('avatar', this.state.avatar);

        try {
            axios.post(url, form_data)
            alert("Mission Has been added success")
            this.props.history.push("/Mission") 
        } catch (err) {
            console.log(err)
        }
    };

    render() {
        return (
            <div className="container">
                <h1>Add Mission</h1>
                <form className="assoc-form avatar" onSubmit={this.addMission}>
                    <div className="assoc-wrapper">
                        <div className="row">
                            <div className="field label-input mt">
                                <TextField
                                    id="standard-multiline-flexible"
                                    label="Mission Title"
                                    multiline
                                    rowsMax={4}
                                    onChange={this.handleTitle}
                                />
                            </div>
                            <div className="description-element label-input">
                                <CKEditor
                                    config={{ placeholder: "Content" }}
                                    editor={ClassicEditor}
                                    onInit={editor => {
                                    }}
                                    onChange={this.handleCkeditorState}
                                />
                            </div>
                        </div>
                        <div className="picture-assoc assoc">
                            <div className="avatar-wrapper">
                                <img id="avatarI" className="profile-pic" src={src}  alt="" />
                            </div>
                            <div className="button-wrapper avatar-edit">
                                <label ></label>
                                <input type="file" name="upload" id="upload" className="upload-box" placeholder="Upload File" onChange={this.imageHandler} />
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
