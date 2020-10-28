import React from 'react'
import "./Mission.css"
import axios from 'axios';
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import CKEditor from "@ckeditor/ckeditor5-react"

import TextField from '@material-ui/core/TextField';


export class EditMission extends React.Component {
    constructor() {
        super();
        this.state = {
            id:'',
            title: '',
            content: '',
            avatar: '',
            image:'',
            association:1
        }
        this.editMission = this.editMission.bind(this);
    }

    imageHandler = (e) => {
        
        var input = document.querySelector('#upload')   
        var file = input.files[0]
        document.querySelector('#avatarI').src = URL.createObjectURL(file)
        
        this.setState({
            avatar: e.target.files[0]
        })
    };

    handleCkeditorState = (event, editor) => {
        const content = editor.getData();

        this.setState({
            content: content.replace(/<[^>]*>?/gm, '')
        })
    }


    editMission(e) {
        e.preventDefault();
        console.log(this.state);
        const url = 'http://fva-backend-dev.herokuapp.com/api/app/mission/'+this.state.id+'/'
        const form_data = new FormData();

        form_data.append('association', this.state.association);
        form_data.append('title', this.state.title);
        form_data.append('content', this.state.content);
        if(this.state.avatar !==""){
            form_data.append('avatar', this.state.avatar);
        }
        
        try {
             axios.put(url, form_data)
             alert("Mission Has been added success")
        } catch (err) {
            console.log(err)
        }
    };

    componentDidMount() {
        const url = "http://fva-backend-dev.herokuapp.com/api/app/mission/" + this.props.match.params.id

        fetch(url).then((response) => {
            response.json().then((result) => {
                this.setState({
                    id: result.id,
                    title: result.title,
                    content: result.content,
                    image: result.avatar
                })
            })
        })  
      
    }


    render() {
        return (
            <div className="container">
                <h1>Edit Mission</h1>
                <form className="assoc-form avatar" onSubmit={this.editMission}>
                    <div className="assoc-wrapper">
                        <div className="row">
                            <div className="field label-input mt">
                                <TextField
                                    id="standard-multiline-flexible"
                                    label="Mission Title"
                                    multiline
                                    rowsMax={4}
                                    value={this.state.title}
                                    onChange={(e) => { this.setState({ title: e.target.value }) }}
                                />
                            </div>
                            <div className="description-element label-input">
                                <CKEditor
                                    config={{ placeholder: "Content" }}
                                    data={this.state.content}
                                    editor={ClassicEditor}
                                    onInit={editor => {
                                    }}
                                    onChange={this.handleCkeditorState}
                                />
                            </div>
                        </div>
                        <div className="picture-assoc assoc">
                            <div className="avatar-wrapper">
                                <img className="profile-pic" id="avatarI" src={this.state.image} alt=""   />
                            </div>
                            <div className="button-wrapper avatar-edit">
                                <label ></label>
                                <input type="file" name="upload" id="upload"  className="upload-box" placeholder="Upload File" onChange={this.imageHandler} />
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn-EditMission btn-assoc" ><span>Edit Mission</span></button>

                </form>

            </div>

        )

    }
}

export default EditMission
