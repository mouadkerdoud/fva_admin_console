import React from 'react'
import "./Posts.css"

/* CKEditor */
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import CKEditor from "@ckeditor/ckeditor5-react"

import ImageUploader from "../../layout/ImageUploader"


const AddPost = () => {
    
    
    return (
        <div className="container">
            <h1>Add Post</h1>

            <div className="formPost">
            <form class="add-product-form forms">
                
                <div className="form-flex-items">
                    <div class="main-menu">
                        <h2 class="active"><i class="fa fa-file-powerpoint"></i>Post</h2>     
                    </div>
                    <div className="field label-input">
                        <label className="label">Post Title*</label>
                        <input placeholder="Title..." type="text" className="data-form add-post" />
                    </div>

                    <div className="field label-input">
                        <label className="label">Select Images*</label>
                        <ImageUploader />
                    </div>
                    <div className="category-element label-input">
                            <label className="label">Select Category Product</label>
                            <select className="moy-selec">
                                <option value="" disabled selected>Select Category Product...</option>
                                <option>Food</option>
                                <option>Electronics</option>
                                <option>Jewelery</option>
                            </select>
                </div>
    
                    <div className="category-element label-input">
                        <label className="label">Post Status*</label>
                        <select className="moy-selec">
                            <option value="" disabled selected>Select Status...</option>
                            <option>Active</option>
                            <option>Disabled</option>
                        </select>
                    </div>
    
    
                    <div className="field label-input">
                        <label className="lbl">Image*</label>
                        <div className="upload">
                            <label className="btng uploadselect" htmlFor="image">Select Image </label>                               
                            <input type="file" hidden id="image" name="image"className="form-control" required/>                          
                        </div>
                    </div>
    
                </div>  
    
                    <div className="description-element label-input">
                        <label className="label">Post Content*</label>
                        <CKEditor
                                    editor={ClassicEditor}
                                    onInit={editor=>{
                                    }}
                        />
                    </div>
        
            </form>
            <form class="add-product-form forms2">
                    
                    <div className="form-flex-items">
                        <div class="main-menu">
                            <h2 class="active"><i class="fa fa-briefcase"></i>Meta</h2>     
                        </div>
                        <div className="field label-input">
                            <label className="label">Meta Title*</label>
                            <input placeholder="Title..." type="text" className="data-form add-meta" />
                        </div>
                        </div>
                        <div className="description-element label-input">
                            <label className="label">Meta Keywords:  *</label>
                            <textarea placeholder="Meta Keywords..." rows="10" className="add-meta" />

                        </div>
                        <div className="description-element label-input">
                            <label className="label">Meta Description:  *</label>
                            <textarea placeholder="Meta description..." rows="10" className="add-meta" />
                        </div>
                                          
            </form>

            </div>
            <form class="add-product-form formsbtn">
                <button className="btn btn-add-prod">Add Post</button>
            </form>

        </div>
    )
}

export default AddPost
