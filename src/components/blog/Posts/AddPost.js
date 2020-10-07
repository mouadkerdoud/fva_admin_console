import React from 'react'
import "./Posts.css"
/* CKEditor */
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import CKEditor from "@ckeditor/ckeditor5-react"

const AddPost = () => {
     
    
    return (
        <div className="container">
            <h1>Add Post</h1>

            <div className="categories">

                <div className="post-category-element label-input">
                    <label className="label">Category*</label>
                    <select>
                        <option value="" disabled selected>Select Category...</option>
                        <option>Web Development</option>
                        <option>Humanity</option>
                        <option>Tech</option>
                        <option>Culture</option>
                    </select>
                </div>
            </div>

            <form class="add-product-form">
            <div className="form-flex-items">
                <div className="field label-input">
                    <label className="label">Post Title*</label>
                    <input placeholder="Title..." type="text" className="data-form" />
                </div>


                <div className="field label-input post-select ">
                    <label className="label">Post Status*</label>
                    <select >
                        <option value="" disabled selected>Select Status...</option>
                        <option>Active</option>
                        <option>Disabled</option>
                    </select>
                </div>

                <div className="field label-input post-select">
                    <label className="label">Post Tags*</label>
                    <select >
                        <option value="" disabled selected>Select Tag...</option>
                        <option>Tag 1</option>
                        <option>Tag 2</option>
                        <option>Tag 3</option>
                    </select>
                </div>

                <div className="field label-input">
                    <label className="label">Image*</label>
                    <input type="file" />
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

                <button className="btn btn-add-prod">Add Post</button>

        </form>
            
        </div>
    )
}

export default AddPost
