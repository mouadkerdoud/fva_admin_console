import React from 'react'

/* CKEditor */
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import CKEditor from "@ckeditor/ckeditor5-react"

import ImageUploader from "../../layout/ImageUploader"

const AddProduct = () => {
     
  return (

    
    <form className="container">
        <h1>Add Product</h1>

        <div className="formProduct">
        <div class="add-product-form forms3">
                <div className="form-flex-items">
                
                    <div className="field label-input">
                        <label className="label">Product Name*</label>
                        <input placeholder="Name..." type="text" className="inp-prod data-form" />
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

                    <div className="field label-input">
                        <label className="label">Model*</label>
                        <input placeholder="Model..." type="text" className="inp-prod data-form" />
                    </div>

                    <div className="category-element label-input">
                                <label className="label">Select Brand</label>
                                <select className="moy-selec">
                                    <option value="" disabled selected>Select Brand Product...</option>
                                    <option>Alver</option>
                                    <option>Lacoste</option>
                                    <option>Rolex</option>
                                </select>
                    </div>

                    <div className="field label-input">
                        <label className="label">Price*</label>
                        <input placeholder="Price..." type="text" className="inp-prod data-form" />
                    </div>
                    
                    <div className="field label-input">
                        <label className="label">Quantity*</label>
                        <input placeholder="Quantity..." type="text" className="inp-prod data-form" />
                    </div>
                

                </div>  

            </div>
            <div class="add-product-form forms4">
                <div className="field label-input">
                    <label className="label">Discount*</label>
                    <input placeholder="Discount..." type="text" className="inp-prod data-form" />
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

                <div className="field label-input">
                    <label className="label">Meta Title*</label>
                    <input placeholder="Title..." type="text" className="data-form add-meta" />
                </div>

                <div className="field label-input">
                    <label className="label">Meta Keywords:  *</label>
                    <textarea placeholder="Meta Keywords..." rows="8" className="add-meta" />
                </div>

                <div className="field label-input">
                    <label className="label">Meta Description:  *</label>
                    <textarea placeholder="Meta Description..." rows="8" className="add-meta" />
                </div>
            
                

            </div>   
        </div>  
                    <button className="add-btn-form">Add Product</button>
    </form>
  )
}

export default AddProduct
