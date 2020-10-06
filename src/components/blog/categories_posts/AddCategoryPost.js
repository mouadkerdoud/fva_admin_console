import React from 'react'

const AddCategoryPost = () => {
    return (
        <div className="container">
            <div className="addcategory-page-container">
                <h1>Add Post Categories & Subcategories</h1>
                
                <form className="form-cat">
                    <div className="category-items-flex">

                        <div className="category-element label-input">
                            <label className="label">Add Category Post</label>
                            <input id="add-cat-input" type="text" placeholder="Add Category Post..." />
                        </div>

                        <input type="submit" value="Add Category Post" className="btn add-cat-btn" />

                    </div>
                </form>

                <form className="form-cat">
                    <div className="category-items-flex" >

                        <div className="category-element label-input">
                            <label className="label">Parent Category Post</label>
                            <select>
                                <option value="" disabled selected>Select Parent Category...</option>
                                <option>Web Dev</option>
                                <option>Humanity</option>
                                <option>Tech</option>
                                <option>Culture</option>
                            </select>
                        </div>

                        <div className="category-element label-input">
                            <label className="label">Add Subcategory Post</label>
                            <input id="add-cat-input" type="text" placeholder="Add Subcategory Post..." />
                        </div>

                        

                    </div>

                    <input type="submit" value="Add Subcategory" className="btn add-cat-btn add-subcat-btn" />
                </form>
                
            </div>
        </div>
    )
}

export default AddCategoryPost
