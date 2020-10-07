import React from 'react'
import "./Category.css"


const AddCategoryProduct = () => {
    return (
        <div className="container">
            <form className="addcategory-page-container">


                <h1>Add Products Category </h1>
                
                <div className="form-cat">
                    <div className="category-items-flex">

                        <div className="category-element label-input">
                            <label className="label">Add Category Product</label>
                            <input className="large-inp" type="text" placeholder="Add Category Product"/>
                        </div>

                    </div>
                </div>

                <div class="add-product-form two-forms">
                    <div className="form-flex-items catsform">
                        <div className="field-lar label-input">
                            <label className="label">Product Name Category*</label>
                            <input placeholder="Name..." type="text" className="data-form-lar" />
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
                            <label className="label">Meta description Category*</label>
                            <input placeholder="Meta description..." type="text" className="data-form-lar" />
                        </div>
                    </div>  
                        
                    <button className="btn add-cat-btn add-subcat-btn">Add Category Product</button>

                </div>

                
            </form>
        </div>
    )
}

export default AddCategoryProduct
