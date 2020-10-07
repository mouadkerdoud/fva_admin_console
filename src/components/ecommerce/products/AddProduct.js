import React from 'react'
import TagsInput from "./TagsInput"

/* CKEditor */
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import CKEditor from "@ckeditor/ckeditor5-react"

const AddProduct = () => {
     const selectedTags = tags => {
		console.log(tags);
	};
  return (
    <div className="container">
        <h1>Add Product</h1>

        <div className="addcategory-page-container">

                <div className="form-cat">
                    <div className="category-items-flex">

                        <div className="category-element label-input">
                            <label className="label">Select Category Product</label>
                            <select className="large-selec">
                                <option value="" disabled selected>Select Category Product...</option>
                                <option>Food</option>
                                <option>Electronics</option>
                                <option>Jewelery</option>
                            </select>
                        </div>


                    </div>
                </div>
        
        </div>


        
        <form class="add-product-form">
            <div className="form-flex-items">
                <div className="field label-input">
                    <label className="label">Product Name*</label>
                    <input placeholder="Name..." type="text" className="data-form" />
                </div>

                <div className="field label-input">
                    <label className="label">Model*</label>
                    <input placeholder="Model..." type="text" className="data-form" />
                </div>

                <div className="field label-input">
                    <label className="label">Brand*</label>
                    <input placeholder="Brand..." type="text" className="data-form" />
                </div>

                <div className="field label-input">
                    <label className="label">Price*</label>
                    <input placeholder="Price..." type="text" className="data-form" />
                </div>
                
                <div className="field label-input">
                    <label className="label">Quantity*</label>
                    <input placeholder="Quantity..." type="text" className="data-form" />
                </div>

                <div className="field label-input">
                    <label className="label">Discount*</label>
                    <input placeholder="Discount..." type="text" className="data-form" />
                </div>

                <div className="field label-input">
                    <label className="label">Product Tags*</label>
                    <TagsInput selectedTags={selectedTags}  tags={['Beauty', 'Sport']}/>
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
                    <label className="label">Short description*</label>
                    <CKEditor
                                editor={ClassicEditor}
                                onInit={editor=>{
                                }}
                    />                
                </div>

                <div className="description-element label-input">
                    <label className="label">Long description*</label>
                    <CKEditor
                                editor={ClassicEditor}
                                onInit={editor=>{
                                }}
                    />
                </div>

                <button className="btn-add-prod">Add Product</button>

        </form>


    </div>
  )
}

export default AddProduct
