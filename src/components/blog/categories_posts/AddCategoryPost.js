import React from 'react'
import "./Category.css"
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import CKEditor from "@ckeditor/ckeditor5-react"

const AddCategoryPost = () => {
    return (
        <div className="container">
         <h1>Add Post Category </h1>

        <form className="addcategory-page-container">


                <div className="inner-container">
                    <div className="field-lar label-input">
                        <label className="label">Category Name*</label>
                        <input placeholder="Name..." type="text" className="data-form-lar" />
                    </div>

                    <div className="description-element label-input">
                        <label className="label">Category Description*</label>
                        <CKEditor
                                    editor={ClassicEditor}
                                    onInit={editor=>{
                                    }}
                        />
                    </div>

                    <div className="field-lar label-input">
                        <label className="label">Meta name Category*</label>
                        <input placeholder="Meta name..." type="text" className="data-form-lar" />
                    </div>

                    <div className="field-lar label-input">
                        <label className="label">Meta keywords Category*</label>
                        <input placeholder="Meta keywords..." type="text" className="data-form-lar" />
                    </div>

                    <div className="field-lar label-input">
                        <label className="label">Meta Description Category*</label>
                        <input placeholder="Meta Description..." type="text" className="data-form-lar" />
                    </div>

                   

                    <button className="btn">Add Category</button>
            </div>
            
        </form>
    </div>
    )
}

export default AddCategoryPost



