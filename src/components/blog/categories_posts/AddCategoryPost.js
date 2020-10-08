import React from 'react'

const AddCategoryPost = () => {
    return (
        <div className="container">
        <form className="addcategory-page-container">


            <h1>Add Post Category </h1>
            
            <div className="form-cat">
                <div className="category-items-flex">

                    <div className="category-element label-input">
                        <label className="label">Add Category Post</label>
                        <input className="large-inp" type="text" placeholder="Add Category Post"/>
                    </div>

                </div>
            </div>

            <div class="add-product-form two-forms">
                <div className="form-flex-items catsform">
                    <div className="field-lar label-input">
                        <label className="label">Post Name Category*</label>
                        <input placeholder="Name..." type="text" className="data-form-lar" />
                    </div>

                    <div className="field-lar label-input">
                        <label className="label">Meta name Category*</label>
                        <input placeholder="Meta name..." type="text" className="data-form-lar" />
                    </div>

                    <div className="field-lar label-input">
                        <label className="label">Meta keywords Category*</label>
                        <textarea placeholder="Meta keywords..." className="data-form-lar" />
                    </div>

                    <div className="field-lar label-input">
                        <label className="label">Meta description Category*</label>
                        <textarea placeholder="Meta description..."  className="data-form-lar" />
                    </div>
                </div>  
                    
                <button className="btn add-cat-btn add-subcat-btn">Add Category Post</button>

            </div>

            
        </form>
    </div>
    )
}

export default AddCategoryPost
