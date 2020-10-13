import React, {Component} from 'react'
import {Link} from "react-router-dom"

class CategoriesProducts extends Component {

    state = {
        isLoading: true,
        products_categories: null
    } 


    // async componentDidMount(){
    //     const url = ""
    //     const response = await fetch(url)
    //     const data = await response.json()
    //     this.setState({products_categories:data, isLoading:false})
    // }

    render(){
        return (
            <div className="container">
                <h1>Categories</h1>
                <Link to='/AddCategoryProduct'><button className="add-new-button">Add New</button></Link>
    
                <div className="meta-table">
    
                    <div className="main-menu">
                        <h2 className="active" style={{width: '16rem'}}><i className="fa fa-list-ul"></i>Categories List</h2>     
                    </div>
        
                    <div className="search-bar">
                        <input placeholder="Search Category Product..." />
                        <i className="fas fa-search search-icon"></i>
                    </div>
    
                </div>
    
                <table className="table-prod">
     
                    <thead>
                        <tr>
                            <th>Category</th>
                            <th>Subcategory</th>
                            <th>Number Of Products</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
    
    
                    <tbody>
                    <tr>
                        <td>Food</td>
                        <td>Vegan Food</td>
                        <td>5</td>
                        <td className="actions-table">
                            <i className="fas fa-edit"></i>
                            <i className="fas fa-trash"></i>
                        </td>
                    </tr>
    
                    <tr>
                        <td>Food</td>
                        <td>Spanish Food</td>
                        <td>35</td>
                        <td className="actions-table">
                            <i className="fas fa-edit"></i>
                            <i className="fas fa-trash"></i>
                        </td>
                    </tr>
    
                    <tr>
                        <td>Clothes</td>
                        <td>Women Clothes</td>
                        <td>65</td>
                        <td className="actions-table">
                            <i className="fas fa-edit"></i>
                            <i className="fas fa-trash"></i>
                        </td>
                    </tr>
    
                   
                   </tbody>
    
                </ table>
    
            </div>
        )
    }
    
}

export default CategoriesProducts
