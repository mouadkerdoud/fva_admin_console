import React from 'react'
import "./Category.css"
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import CKEditor from "@ckeditor/ckeditor5-react"

const AddCategoryPost = () => {
    return (
        <div className="container">
            <h1>Add Post Category </h1>

            <form className="addcategory-page-container">

                <div className="inner-container categP">
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

                    <div className="field label-input">
                        <label className="label">Meta Keywords:  *</label>
                        <textarea placeholder="Meta Keywords..." rows="8" className="add-meta" />
                    </div>

                    <div className="field label-input">
                        <label className="label">Meta Description:  *</label>
                        <textarea placeholder="Meta Description..." rows="8" className="add-meta" />
                    </div>
                    <button className="add-cat-btn">Add Category</button>
            </div>
            
        </form>
    </div>
    )
}

export default AddCategoryPost



