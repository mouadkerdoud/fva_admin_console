import React from 'react'

/* CKEditor */
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import CKEditor from "@ckeditor/ckeditor5-react"


// Material UI
import {ProductName, ProductModel, CategoryProduct, BrandProduct, QuantityProduct, PriceProduct, DiscountProduct} from "../MaterialUIComponents/index"
import {MetaName, MetaKeyword, MetaDescription } from "../MaterialUIComponents/index"

import ImageUploader from "../../layout/ImageUploader"





const AddProduct =  ()=>{
    
  return (

    <div className="container">
        <h1>Add Product</h1>

        <form >
            <div className="addcategory-page-container">


                <div className="side">

                    <div className="field label-input">
                        <ProductName />
                    </div>


                    <div className="field label-input">
                        <ProductModel />
                    </div>

                    <div className="field label-input">
                       <QuantityProduct />
                    </div>

                    <div className="field label-input">
                        <PriceProduct />                        
                    </div>
                    <div className="field label-input">
                        <CategoryProduct />
                    </div>

                    <div className="field label-input">
                        <BrandProduct />
                    </div>

                    <div className="field label-input">
                        <DiscountProduct />
                    </div>


                    <div className="label-input">
                        <CKEditor
                                    config={{placeholder: "Short Description..."}} 
                                    editor={ClassicEditor}
                                    onInit={editor=>{
                                    }}
                        />
                    </div>

                    <div className="label-input">
                        <CKEditor
                                    config={{placeholder: "Long Description..."}} 
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

                    <button className="btn">Add Product</button>

                </div>



            </div>
        </form>
    </div>


  )
}

export default AddProduct
