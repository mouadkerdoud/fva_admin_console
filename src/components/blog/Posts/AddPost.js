import React from 'react'

import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import CKEditor from "@ckeditor/ckeditor5-react"


import ImageUploader from "../../layout/ImageUploader"
import TagsPost from "./TagsPost"

// Material UI
import {CategoryPost, StatusPost, PostTitle} from "../MaterialUIComponents/index"
import {MetaTitle, MetaKeyword, MetaDescription } from "../MaterialUIComponents/index"


import "./Posts.css"





const AddPost = ()=>{


    return (
        <div className="container">
         <h1>Add Post</h1>

        <form >
            <div className="addcategory-page-container">
                <div className="side">

                    <div className="field label-input">
                           <PostTitle />
                    </div>

                    <div className="field label-input">
                        <CKEditor
                                    editor={ClassicEditor}
                                    onInit={editor=>{
                                    }}
                                    config={{placeholder: "Post Content..."}} 
                        />
                    </div>

                    <div className=" field label-input">
                        <TagsPost />
                    </div>

                    <div className="field label-input">
                        <CategoryPost />
                    </div>

                    <div className="field label-input">
                        <StatusPost />
                    </div>

                    <div className="field label-input">
                        <ImageUploader />
                    </div>

                    
                </div>

                <div className="side side-second">

                    <div style={{marginBottom:"3rem"}} className="label-input">
                        <MetaTitle />
                    </div>

                    <div style={{marginBottom:"3rem"}} className="label-input">
                        <MetaKeyword />
                    </div>

                    <div style={{marginBottom:"3rem"}} className="label-input">
                        <MetaDescription /> 
                    </div>

                    <button className="btn">Add Post</button>


                </div>
                
            </div>

        </form>
    </div>

    )
}

export default AddPost




               

