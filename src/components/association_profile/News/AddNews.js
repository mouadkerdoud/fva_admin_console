import React from 'react';
import "./News.css"
import src from "./placeholder4.png"
import axios from 'axios';

/* CKEditor */
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import CKEditor from "@ckeditor/ckeditor5-react"

// MATERIAL UI
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

class AddNews extends React.Component {
    constructor() {
        super();
        this.state = {
            title: '',
            content: '',
            main_image: '',
            thumbnail_image: '',
            meta_title: '',
            meta_keyword: '',
            association: 1
        }
        this.addNews = this.addNews.bind(this);
        this.imageHandler = this.imageHandler.bind(this)
        this.handleTitle = this.handleTitle.bind(this)
        this.imageHandler2 = this.imageHandler2.bind(this)
        this.handleCkeditorState = this.handleCkeditorState.bind(this)
        this.handleMeta = this.handleMeta.bind(this)
        this.handleKeywords = this.handleKeywords.bind(this)
    }

    imageHandler(e) {
        let showimage = document.getElementById("showimage");
        let removeImage = document.getElementById("removeImage");
        showimage.style.display = "inline-block";
        removeImage.classList.add("rmvM");

        var input = document.querySelector('#captureimage')
        var file = input.files[0]
        document.querySelector('#showimage').src = URL.createObjectURL(file)

        this.setState({
            main_image: e.target.files[0]
        })
    };

    imageHandler2(e) {
        let showimage2 = document.getElementById("showimage2");
        let removeImage2 = document.getElementById("removeImage2");
        showimage2.style.display = "inline-block";
        removeImage2.classList.add("rmvM2");

        var input = document.querySelector('#captureimage2')
        var file = input.files[0]
        document.querySelector('#showimage2').src = URL.createObjectURL(file)

        this.setState({
            thumbnail_image: e.target.files[0]
        })
    };

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

    handleTitle(e) {
        this.setState({ title: e.target.value })
    }

    handleMeta(e) {
        this.setState({ meta_title: e.target.value })
    }

    handleKeywords(e) {
        this.setState({ meta_keyword: e.target.value })
    }

    handleCkeditorState(event, editor) {
        const data = editor.getData();

        this.setState({
            content: data.replace(/<[^>]*>?/gm, '')
        })
    }

    addNews(e) {
        e.preventDefault();
        console.log(this.state);
        const url = 'http://fva-backend-dev.herokuapp.com/api/app/news/'
        const form_data = new FormData();


        form_data.append('association', this.state.association);
        form_data.append('title', this.state.title);
        form_data.append('content', this.state.content);
        form_data.append('main_image', this.state.main_image);
        form_data.append('thumbnail_image', this.state.thumbnail_image);
        form_data.append('meta_title', this.state.meta_title);
        form_data.append('meta_keyword', this.state.meta_keyword);

        try {
            axios.post(url, form_data)
            alert("News Has been added success")
            this.props.history.push("/News");
        } catch (err) {
            console.log(err)
        };

    };

    render() {

        return (
            <div className="container">
                <h1>Add News</h1>

                <form onSubmit={this.addNews}>
                    <div className="addcategory-page-container news">

                        <div className="side">
                            <div className="field label-input">
                                <main>
                                    <div className="formUpload">
                                        <label><span>Main Image</span>
                                            <IconButton color="primary" aria-label="upload picture" component="span">
                                                <PhotoCamera />
                                            </IconButton>
                                            <input type="file" id="captureimage" onChange={this.imageHandler} style={{ display: "none" }} />
                                        </label>
                                    </div>
                                    <div id="imagewrapper">
                                        <input type="button" id="removeImage" alt="" onClick={this.removeImage} value="x" className="btn-rmv1" />
                                        <img id="showimage" className="image-frame" src={src}
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
                                    onChange={this.handleTitle}
                                />
                            </div>

                            <div className="label-input">
                                <CKEditor
                                    config={{ placeholder: "News Content" }}
                                    editor={ClassicEditor}
                                    onInit={editor => {
                                    }}
                                    onChange={this.handleCkeditorState}
                                />
                            </div>

                        </div>


                        <div className="side side-second news">


                            <div className="field label-input">

                                <div className="formUpload newsform">
                                    <label className="lbl"><span>Thumbnail Image</span>
                                        <input type="file" accept="image/*" capture="camera" id="captureimage2" onChange={this.imageHandler2} style={{ display: "none" }} />
                                        <IconButton color="primary" aria-label="upload picture" component="span">
                                            <PhotoCamera />
                                        </IconButton>
                                    </label>
                                </div>
                                <div id="imagewrapper1">
                                    <input type="button" id="removeImage2" alt="" onClick={this.removeImage2} value="x" className="btn-rmv1" />
                                    <img id="showimage2" className="image-frame" src={src}
                                        alt="" />
                                </div>
                            </div>

                            <div style={{ marginBottom: "3rem" }} className="label-input">
                                <TextField
                                    id="standard-multiline-flexible"
                                    label="Meta Title"
                                    multiline
                                    rowsMax={4}
                                    onChange={this.handleMeta}
                                />
                            </div>

                            <div style={{ marginBottom: "3rem" }} className="label-input meta_DK">
                                <TextField
                                    id="outlined-textarea"
                                    placeholder="Meta Keywords"
                                    multiline
                                    variant="outlined"
                                    rowsMax={4}
                                    onChange={this.handleKeywords}
                                />
                            </div>

                            <button className="btn-assoc" type="submit">Add News</button>

                        </div>

                    </div>

                </form>
            </div>
        )

    }
}

export default AddNews