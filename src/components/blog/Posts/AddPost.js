import React from 'react'
import "./Posts.css"

import TagsInput from "./TagsInput"
/* CKEditor */
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import CKEditor from "@ckeditor/ckeditor5-react"

const AddPost = () => {
    const selectedTags = tags => {
		console.log(tags);
	};
    
    return (
        <div className="container">
            <h1>Add Post</h1>

            <div className="categories">

                <div className="post-category-element categ label-input">
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
    
    
                    <div className="field label-input post-select ">
                        <label className="label">Post Status*</label>
                        <select className="add-post">
                            <option value="" disabled selected>Select Status...</option>
                            <option>Active</option>
                            <option>Disabled</option>
                        </select>
                    </div>
    
                    <div className="field label-input post-select">
                        <label className="label">Post Tags*</label>
                        <TagsInput selectedTags={selectedTags}  tags={['Beauty', 'Sport']}/>
                    </div>
    
                    <div className="field label-input">
                        <label className="lbl">Image*</label>
                        <div className="upload">
                            <label className="btng uploadselect" htmlFor="image">Please Select </label>                               
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
                            <CKEditor   
                                        editor={ClassicEditor}
                                        onInit={editor=>{
                                        }}
                            />
                        </div>
                        <div className="description-element label-input">
                            <label className="label">Meta Description:  *</label>
                            <CKEditor
                                        editor={ClassicEditor}
                                        onInit={editor=>{
                                        }}
                            />
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
