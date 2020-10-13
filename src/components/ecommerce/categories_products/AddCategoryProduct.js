import React from 'react'

// CKEDITOR
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import CKEditor from "@ckeditor/ckeditor5-react"

import ImageUploader from "../../layout/ImageUploader"

// MaterialUI
import {CategoryName, MetaName, MetaKeyword, MetaDescription } from "../MaterialUIComponents/index"

import "./Category.css"




const AddCategoryProduct = () => {
  
    return (
        <div className="container">
         <h1>Add Category Product </h1>

        <form >
            <div className="addcategory-page-container">

                <div className="side">

                    <div style={{marginBottom:"3rem"}} className="field label-input">
                        <CategoryName />
                    </div>

                    <div className="field label-input">
                        <CKEditor
                                    config={{placeholder: "Category Description"}} 
                                    editor={ClassicEditor}
                                    onInit={editor=>{
                                    }}
                        />
                    </div>

                    <div className="field label-input">
                        <ImageUploader />
                    </div>
                    
                </div>

                <div className="side side-second">
                    
                    <div style={{marginBottom:"3rem"}} className="label-input">
                        <MetaName />
                    </div>

                    <div style={{marginBottom:"3rem"}} className="label-input">
                        <MetaKeyword />
                    </div>

                    <div style={{marginBottom:"3rem"}} className="label-input">
                        <MetaDescription /> 
                    </div>

                    <button className="btn">Add Category Product</button>
                </div>

            </div>
        </form>
    </div>
    )
}

export default AddCategoryProduct

