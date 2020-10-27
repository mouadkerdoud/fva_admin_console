import React from 'react'
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


export default class AddNews extends React.Component {
    constructor() {
        super();
        this.state = {
            id: '',
            title: '',
            content: '',
            contentN: '',
            main_image: '',
            thumbnail_image: '',
            main_imageN: '',
            thumbnail_imageN: '',
            meta_title: '',
            meta_keyword: '',
            association: 1
        }

        this.editNews = this.editNews.bind(this);
        this.imageHandler = this.imageHandler.bind(this)
        this.handleTitle = this.handleTitle.bind(this)
        this.imageHandler2 = this.imageHandler2.bind(this)
        this.handleCkeditorState = this.handleCkeditorState.bind(this)
        this.handleMeta = this.handleMeta.bind(this)
        this.handleKeywords = this.handleKeywords.bind(this)
    }

    componentDidMount() {
        const url = "http://fva-backend-dev.herokuapp.com/api/app/news/" + this.props.match.params.id
        fetch(url).then((response) => {
            response.json().then((result) => {
                this.setState({
                    id: result.id,
                    title: result.title,
                    contentN: result.content,
                    main_imageN: result.main_image,
                    thumbnail_imageN: result.thumbnail_image,
                    meta_title: result.meta_title,
                    meta_keyword: result.meta_keyword
                })
            })
        })
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

    editNews(e) {
        e.preventDefault();
        console.log(this.state);
        const url = 'http://fva-backend-dev.herokuapp.com/api/app/news/'+this.state.id+"/"
        const form_data = new FormData();


        form_data.append('association', this.state.association);
        form_data.append('title', this.state.title);
        form_data.append('content', this.state.content);
        form_data.append('meta_title', this.state.meta_title);
        form_data.append('meta_keyword', this.state.meta_keyword);
        if(this.state.main_image !==""){
            form_data.append('main_image', this.state.main_image);
        }
        if(this.state.thumbnail_image !==""){
            form_data.append('thumbnail_image', this.state.thumbnail_image);
        }
        try {
            axios.put(url, form_data)
            alert("News Has been edited success")
            this.props.history.push("/News");
        } catch (err) {
            console.log(err)
        };

    };

    render() {

        return (
            <div className="container">
                <h1>Add News</h1>


                <form onSubmit={this.editNews}>
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
                                        <img id="showimage" className="image-frame" src={this.state.main_imageN}
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
                                    value={this.state.title}
                                />
                            </div>

                            <div className="label-input">
                                <CKEditor
                                    config={{ placeholder: "News Content" }}
                                    data={this.state.contentN}
                                    editor={ClassicEditor}
                                    onInit={editor => {
                                    }}
                                    onChange={this.handleCkeditorState}
                                />
                            </div>

                        </div>


                        <div className="side side-second news">


                            <div className=" field label-input">

                                <div className="formUpload newsform">
                                    <label className="lbl"><span>Thumbnail Image</span>
                                        <input type="file" accept="image/*" capture="camera" id="captureimage2" onChange={this.imageHandler2} caption="true" style={{ display: "none" }} />
                                        <IconButton color="primary" aria-label="upload picture" component="span">
                                            <PhotoCamera />
                                        </IconButton>
                                    </label>
                                </div>
                                <div id="imagewrapperI">
                                    <input type="button" id="removeImage2" alt="" onClick={this.removeImage2} value="x" className="btn-rmv1" />
                                    <img id="showimage2" className="image-frame" src={this.state.thumbnail_imageN}
                                        alt="" />
                                </div>
                            </div>

                            <div style={{ marginBottom: "3rem" }} className="label-input">
                                <TextField
                                    id="standard-multiline-flexible"
                                    placeholder="Meta Title"
                                    multiline
                                    rowsMax={4}
                                    onChange={this.handleMeta}
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
                                    onChange={this.handleKeywords}
                                    value={this.state.meta_keyword}
                                />
                            </div>

                            <button className="btn-assoc" type="submit">Edit News</button>

                        </div>

                    </div>

                </form>
            </div>
        )

    }
}

