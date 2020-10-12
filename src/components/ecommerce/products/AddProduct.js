import React from 'react'

/* CKEditor */
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import CKEditor from "@ckeditor/ckeditor5-react"
import TextField from '@material-ui/core/TextField';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import { withStyles } from "@material-ui/core/styles";


import ImageUploader from "../../layout/ImageUploader"
import TagsProducts from "./TagsProducts"


const styles = theme => ({
    input: {
      height: 100
    },
  });


const AddProduct =  withStyles(styles)(props =>{
    

  const { classes } = props;

  return (

    <div className="container">
        <h1>Add Product</h1>

        <form >
            <div className="addcategory-page-container">


                <div className="side">
                    <div className="field label-input">
                        <label className="label">Product Name*</label>
                            <TextField
                                id="standard-multiline-flexible"
                                placeholder="Product Name"
                                multiline
                                rowsMax={4}
                            />
                    </div>


                    <div className="field label-input">
                        <label className="label">Model*</label>
                            <TextField
                                id="standard-multiline-flexible"
                                placeholder="Model"
                                multiline
                                rowsMax={4}
                            />
                    </div>

                    <div className="category-element label-input">
                        <label className="label">Select Category Product</label>
                        <select className="larg-selec" >
                            <option value="" disabled selected>Select Category Product...</option>
                            <option>Clothes</option>
                            <option>Sneakers</option>
                            <option>Home Furniture</option>
                        </select>
                    </div>

                    <div className="category-element label-input">
                        <label className="label">Select Brand Product </label>
                        <select className="larg-selec" >
                            <option value="" disabled selected>Select Brand Product...</option>
                            <option>Alver</option>
                            <option>Rollex</option>
                            <option>Ralph</option>
                        </select>
                    </div>

                    <div className="field label-input">
                        <label className="label">Quantity*</label>
                            <TextField
                                id="standard-multiline-flexible"
                                placeholder="Quantity"
                                multiline
                                rowsMax={4}
                            />
                    </div>

                    <div className="field label-input">
                        <label className="label">Price*</label>
                        <OutlinedInput
                            id="outlined-adornment-amount"
                            startAdornment={<InputAdornment position="start">DH</InputAdornment>}
                            labelWidth={60}
                        />
                    </div>


                    <div className="field label-input">
                        <label className="label">Discount*</label>
                            <TextField
                                id="standard-multiline-flexible"
                                placeholder="Discount"
                                multiline
                                rowsMax={4}
                            />
                    </div>


                    <div className="description-element label-input">
                        <label className="label">Short Description*</label>
                        <CKEditor
                                    editor={ClassicEditor}
                                    onInit={editor=>{
                                    }}
                        />
                    </div>

                    <div className="description-element label-input">
                        <label className="label">Long Description*</label>
                        <CKEditor
                                    editor={ClassicEditor}
                                    onInit={editor=>{
                                    }}
                        />
                    </div>

                    

                </div>


        
                <div className="side side-second">
                    <div className="field label-input">
                        <label className="label">Select Images*</label>
                        <ImageUploader />
                    </div>

                    
                    

                    <div style={{marginBottom:"3rem"}} className="label-input">
                        <label className="label">Meta Title Product*</label>
                            <TextField
                                id="standard-multiline-flexible"
                                placeholder="Meta name Category"
                                multiline
                                rowsMax={4}
                            />
                    </div>

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

                        <button className="btn">Add Product</button>
                </div>



            </div>
        </form>
    </div>


  )
})

export default AddProduct
