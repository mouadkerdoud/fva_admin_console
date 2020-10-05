import React from 'react'

const AddProduct = () => {
  return (
    <div className="container">
        <h1>Add Product</h1>

        <div className="categories">

            <div className="product-category-element label-input">
                <label className="label">Category*</label>
                <select>
                    <option value="" disabled selected>Select Category...</option>
                    <option>Food</option>
                    <option>Clothes</option>
                    <option>Electronics</option>
                    <option>Jewelery</option>
                </select>
            </div>

            <div className="sub-category product-category-element label-input">
                <label className="label">Subcategory*</label>
                <select>
                    <option value="" disabled selected>Select Subcategory...</option>
                    <option>something1</option>
                    <option>something2</option>
                    <option>something3</option>
                    <option>something4</option>
                </select>
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
                    <select>
                        <option value="" disabled selected>Select Tag...</option>
                        <option>Tag 1</option>
                        <option>Tag 2</option>
                        <option>Tag 3</option>
                    </select>
                </div>

                <div className="field label-input">
                    <label className="label">Image*</label>
                    <input type="file" />
                </div>

               

            </div>  

                <div className="description-element label-input">
                    <label className="label">Short description*</label>
                    <textarea placeholder="Short Description..." />
                </div>

                <div className="description-element label-input">
                    <label className="label">Long description*</label>
                    <textarea placeholder="Long Description..." />
                </div>

                <button className="btn-add-prod">Add Product</button>

        </form>


    </div>
  )
}

export default AddProduct
