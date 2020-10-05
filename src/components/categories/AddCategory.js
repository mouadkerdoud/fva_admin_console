import React from 'react'
import "./Category.css"


const AddCategory = () => {
    return (
        <div className="container">
            <div className="addcategory-page-container">
                <h1>Add Categories & Subcategories</h1>
                
                <form className="form-cat">
                    <div className="category-items-flex">

                        <div className="category-element label-input">
                            <label className="label">Add Category</label>
                            <input id="add-cat-input" type="text" placeholder="Add Category..." />
                        </div>

                        <input type="submit" value="Add Category" className="add-cat-btn" />

                    </div>
                </form>

                <form className="form-cat">
                    <div className="category-items-flex" >

                        <div className="category-element label-input">
                            <label className="label">Parent Category</label>
                            <select>
                                <option value="" disabled selected>Select Parent Category...</option>
                                <option>Food</option>
                                <option>Clothes</option>
                                <option>Electronics</option>
                                <option>Jewelery</option>
                            </select>
                        </div>

                        <div className="category-element label-input">
                            <label className="label">Add Subcategory</label>
                            <input id="add-cat-input" type="text" placeholder="Add Subcategory..." />
                        </div>

                        

                    </div>

                    <input type="submit" value="Add Subcategory" className="add-cat-btn add-subcat-btn" />
                </form>
                
            </div>
        </div>
    )
}

export default AddCategory
