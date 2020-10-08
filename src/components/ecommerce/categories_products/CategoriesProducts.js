import React, {Component} from 'react'
import {Link} from "react-router-dom"

class CategoriesProducts extends Component {

    state = {
        isLoading: true,
        products_categories: null
    } 


    async componentDidMount(){
        const url = ""
        const response = await fetch(url)
        const data = await response.json()
        this.setState({products_categories:data, isLoading:false})
    }

    render(){
        return (
            <div className="container">
                <h1>Categories</h1>
                <Link to='/AddCategoryProduct'><button className="btn">Add New</button></Link>
    
                <div className="meta-table">
    
                    <div class="main-menu">
                        <h2 class="active" style={{width: '16rem'}}><i class="fa fa-list-ul"></i>Categories List</h2>     
                    </div>
        
                    <div className="meta-table-field metatable">
                        <input placeholder="Seach Post..." />
                        <i className="fas fa-search search-icon"></i>
                    </div>
    
                </div>
    
                <table className="table-prod">
     
                    <tr>
                        <th>Category</th>
                        <th>Subcategory</th>
                        <th>Number Of Products</th>
                        <th>Actions</th>
                    </tr>
    
    
    
                    <tr>
                        <td>Food</td>
                        <td>Vegan Food</td>
                        <td>5</td>
                        <td className="actions-table">
                            <i class="fas fa-edit"></i>
                            <i class="fas fa-trash"></i>
                        </td>
                    </tr>
    
                    <tr>
                        <td>Food</td>
                        <td>Spanish Food</td>
                        <td>35</td>
                        <td className="actions-table">
                            <i class="fas fa-edit"></i>
                            <i class="fas fa-trash"></i>
                        </td>
                    </tr>
    
                    <tr>
                        <td>Clothes</td>
                        <td>Women Clothes</td>
                        <td>65</td>
                        <td className="actions-table">
                            <i class="fas fa-edit"></i>
                            <i class="fas fa-trash"></i>
                        </td>
                    </tr>
    
                    <tr>
                        <td>Clothes</td>
                        <td>Men Clothes</td>
                        <td>51</td>
                        <td className="actions-table">
                            <i class="fas fa-edit"></i>
                            <i class="fas fa-trash"></i>
                        </td>
                    </tr>
    
                    <tr>
                        <td>Jewelery</td>
                        <td>Watches</td>
                        <td>24</td>
                        <td className="actions-table">
                            <i class="fas fa-edit"></i>
                            <i class="fas fa-trash"></i>
                        </td>
                    </tr>
                   
    
                </ table>
    
            </div>
        )
    }
    
}

export default CategoriesProducts
