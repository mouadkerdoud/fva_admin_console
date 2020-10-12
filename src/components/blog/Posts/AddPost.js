import React from 'react'

import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import CKEditor from "@ckeditor/ckeditor5-react"
import TextField from '@material-ui/core/TextField';
import { withStyles } from "@material-ui/core/styles";


import ImageUploader from "../../layout/ImageUploader"
import TagsPost from "./TagsPost"

import "./Posts.css"



const styles = theme => ({
    input: {
      height: 90
    },
  });

const AddPost = withStyles(styles)(props => {
    const { classes } = props;


    return (
        <div className="container">
         <h1>Add Post</h1>

        <form >
            <div className="addcategory-page-container">
                <div className="side">

                    <div className="field label-input">
                        <label className="label">Post Title*</label>
                            <TextField
                                id="standard-multiline-flexible"
                                placeholder="Post Title"
                                multiline
                                rowsMax={4}
                            />
                    </div>

                    <div className="description-element label-input">
                        <label className="label">Post Content*</label>
                        <CKEditor
                                    editor={ClassicEditor}
                                    onInit={editor=>{
                                    }}
                        />
                    </div>

                    <div className=" label-input">
                        <label className="label">Post Tags*</label>
                        <TagsPost />
                    </div>

                    <div className="category-element label-input">
                        <label className="label">Select Category Post</label>
                        <select className="larg-selec" >
                            <option value="" disabled selected>Select Category Post...</option>
                            <option>Tech</option>
                            <option>Humanity</option>
                            <option>Culture</option>
                        </select>
                    </div>

                    <div className="category-element label-input">
                        <label className="label">Post Status*</label>
                        <select className="larg-selec">
                            <option value="" disabled selected>Select Status...</option>
                            <option>Active</option>
                            <option>Disabled</option>
                        </select>
                    </div>
            
                    
                </div>

                <div className="side">

                    <div className="field label-input">
                        <label className="label">Select Images*</label>
                        <ImageUploader />
                    </div>

                    <div className=" label-input">
                        <label className="label">Meta Title Post*</label>
                            <TextField
                                id="standard-multiline-flexible"
                                placeholder="Meta name Category"
                                multiline
                                rowsMax={4}
                            />
                    </div>

                    <div className="label-input">
                        <label  className="label">Meta Keywords:  *</label>
                        <TextField
                            id="outlined-textarea"
                            placeholder="Meta Keywords"
                            multiline
                            variant="outlined"
                            rowsMax={4}
                            InputProps={{
                                className: classes.input
                            }}
                        />                
                    </div>

                    <div className="label-input">
                        <label className="label">Meta Description:  *</label>
                        <TextField
                            id="outlined-textarea"
                            placeholder="Meta Description"
                            multiline
                            variant="outlined"
                            rowsMax={4}
                            InputProps={{
                                className: classes.input
                            }}
                        />            
                    </div>


                </div>
                
            </div>
            <button style={{marginTop:"2rem"}} className="add-btn-form">Add Post</button>

        </form>
    </div>

    )
})

export default AddPost




               

