import React from 'react'

const AddProduct = () => {
  return (
    <div className="container">
        <h1>Add Product</h1>

        <div className="categories">

            <div className="main-category category-element">
                <label className="label">Category*</label>
                <select>
                    <option value="" disabled selected>Select Category...</option>
                    <option>Food</option>
                    <option>Clothes</option>
                    <option>Electronics</option>
                    <option>Jewelery</option>
                </select>
            </div>

            <div className="sub-category category-element">
                <label className="label">Sub Category*</label>
                <select>
                    <option value="" disabled selected>Select Sub Category...</option>
                    <option>something1</option>
                    <option>something2</option>
                    <option>something3</option>
                    <option>something4</option>
                </select>
            </div>

        </div>

        <form class="add-product-form">
            <div className="form-flex-items">
                <div className="field">
                    <label>Product Name*</label>
                    <input placeholder="Name..." type="text" className="data-form" />
                </div>

                <div className="field">
                    <label>Model*</label>
                    <input placeholder="Model..." type="text" className="data-form" />
                </div>

                <div className="field">
                    <label>Brand*</label>
                    <input placeholder="Brand..." type="text" className="data-form" />
                </div>

                <div className="field">
                    <label>Price*</label>
                    <input placeholder="Price..." type="text" className="data-form" />
                </div>
                
                <div className="field">
                    <label>Quantity*</label>
                    <input placeholder="Quantity..." type="text" className="data-form" />
                </div>

                <div className="field">
                    <label>Discount*</label>
                    <input placeholder="Discount..." type="text" className="data-form" />
                </div>

                <div className="field">
                    <label>Product Tags*</label>
                    <select>
                        <option value="" disabled selected>Select Tag...</option>
                        <option>Tag 1</option>
                        <option>Tag 2</option>
                        <option>Tag 3</option>
                    </select>
                </div>

                <div className="field">
                    <label>Image*</label>
                    <input type="file" />
                </div>

               

            </div>  

                <div className="short-description description-element">
                    <label>Short description*</label>
                    <textarea placeholder="Short Description..." />
                </div>

                <div className="long-description description-element">
                    <label>Long description*</label>
                    <textarea placeholder="Long Description..." />
                </div>

                <button className="btn-add-prod">Add Product</button>

        </form>


    </div>
  )
}

export default AddProduct
