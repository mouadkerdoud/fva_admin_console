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

            <form>

                <div  className="flexy-columns" >
                
                    <div class="add-product-form forms">
                        <div className="form-flex-items">

                            <div className="field label-input first-input">
                                <label className="label">Post Title*</label>
                                <input placeholder="Title..." type="text" className="data-form add-post" />
                            </div>
                        </div>


                            <div className="description-element label-input">
                                <label className="label">Post Content*</label>
                                <CKEditor
                                            editor={ClassicEditor}
                                            
                                />
                            </div>
                        
                        <div className="form-flex-items">
                            

                            <div className="field label-input">
                                <label className="label">Select Images*</label>
                                <ImageUploader />
                            </div>
                            <div className="category-element label-input">
                                    <label className="label">Select Category Post</label>
                                    <select className="moy-selec">
                                        <option value="" disabled selected>Select Category Post...</option>
                                        <option>Tech</option>
                                        <option>Humanity</option>
                                        <option>Culture</option>
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
            
            
                        </div>  
            
                        
                
                    </div>
                    <div class="add-product-form forms2">
                            
                            <div className="form-flex-items">
                        
                                <div className="field label-input first-input">
                                    <label className="label">Meta Title*</label>
                                    <input placeholder="Title..." type="text" className="data-form add-meta" />
                                </div>
                                </div>
                                <div className="description-element label-input">
                                    <label className="label">Meta Keywords:  *</label>
                                    <textarea placeholder="Meta Keywords..." rows="8" className="add-meta" />

                                </div>

                                <div className="description-element label-input">
                                    <label className="label">Meta Description:  *</label>
                                    <textarea placeholder="Meta description..." rows="8" className="add-meta" />
                                </div>
                                                
                    </div>
                </div>

                <button className="add-btn-form">Add Post</button>
            </form>
            

        </div>
    )
}

export default AddPost
