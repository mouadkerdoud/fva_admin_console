import React from 'react'
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import CKEditor from "@ckeditor/ckeditor5-react"
import TextField from '@material-ui/core/TextField';
import { withStyles } from "@material-ui/core/styles";

import "./Category.css"


const styles = theme => ({
    input: {
      height: 90
    },
  });


const AddCategoryProduct = withStyles(styles)(props => {
    const { classes } = props;
  
    return (
        <div className="container">
         <h1>Add Product Category </h1>

        <form >
            <div className="addcategory-page-container">
                <div className="side">

                    <div className="field label-input">
                        <label className="label">Category Name*</label>
                            <TextField
                                id="standard-multiline-flexible"
                                placeholder="Category Name"
                                multiline
                                rowsMax={4}
                            />
                    </div>

                    <div className="description-element label-input">
                        <label className="label">Category Description*</label>
                        <CKEditor
                                    editor={ClassicEditor}
                                    onInit={editor=>{
                                    }}
                        />
                    </div>

                    <div className=" label-input">
                        <label className="label">Meta name Category*</label>
                            <TextField
                                id="standard-multiline-flexible"
                                placeholder="Meta name Category"
                                multiline
                                rowsMax={4}
                            />
                    </div>
                    
                </div>

                <div className="side">
                    <div style={{marginBottom:"3rem"}} className="label-input">
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
            <button style={{marginTop:"2rem"}} className="add-btn-form">Add Category</button>

        </form>
    </div>
    )
})

export default AddCategoryProduct

