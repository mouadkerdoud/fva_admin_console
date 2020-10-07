import React, {Component} from 'react'
import {Link} from "react-router-dom"
import "./Products.css"


class Products extends Component {

    state = {
        isLoading: true,
        products: null
    } 


    async componentDidMount(){
        const url = ""
        const response = await fetch(url)
        const data = await response.json()
        this.setState({products:data, isLoading:false})
    }

    render(){
        return (
            <div className="container">
    
                <h1>Products</h1>
                <Link to='/AddProduct'><button className="btn">Add New</button></Link>
    
                <div className="meta-table">
    
                    <div className="meta-table-title">Products List</div>
    
                    <div className="meta-table-field">
                        <input placeholder="Seach Product..." />
                        <i className="fas fa-search search-icon"></i>
                    </div>
    
                </div>
    
                
    
                <table className="table-prod">
     
                    <tr>
                        <th>Product Id</th>
                        <th>Product Name</th>
                        <th>Image</th>
                        <th>Category</th>
                        <th>Brand</th>
                        <th>Price </th>
                        <th>Quantity</th>
                        <th>Discount</th>
                        <th>Actions</th>
                    </tr>
    
                   
    
                    <tr>
                        <td>8852</td>
                        <td>Sneakers</td>
                        <td>image</td>
                        <td>Clothes</td>
                        <td>Alver</td>
                        <td>700 DH</td>
                        <td>15</td>
                        <td>20%</td>
                        <td className="actions-table">
                            <i class="fas fa-edit"></i>
                            <i class="fas fa-trash"></i>
                        </td>
                    </tr>
    
                    <tr>
                        <td>6642</td>
                        <td>Watch</td>
                        <td>image</td>
                        <td>Jewelery</td>
                        <td>Rollex</td>
                        <td>1020 DH</td>
                        <td>15</td>
                        <td>20%</td>
                        <td className="actions-table">
                            <i class="fas fa-edit"></i>
                            <i class="fas fa-trash"></i>
                        </td>
                    </tr>
    
    
                    <tr>
                        <td>1248</td>
                        <td>Pink Bag</td>
                        <td>image</td>
                        <td>Clothes</td>
                        <td>BeautyCHS</td>
                        <td>200 DH</td>
                        <td>15</td>
                        <td>20%</td>
                        <td className="actions-table">
                            <i class="fas fa-edit"></i>
                            <i class="fas fa-trash"></i>
                        </td>
                    </tr>
    
                    <tr>
                        <td>7921</td>
                        <td>Tie</td>
                        <td>image</td>
                        <td>Clothes</td>
                        <td>Blues</td>
                        <td>50 DH</td>
                        <td>15</td>
                        <td>20%</td>
                        <td className="actions-table">
                            <i class="fas fa-edit"></i>
                            <i class="fas fa-trash"></i>
                        </td>
                    </tr>
    
    
                    <tr>
                        <td>3248</td>
                        <td>Earphones</td>
                        <td>image</td>
                        <td>Tech</td>
                        <td>Audacy</td>
                        <td>200 DH</td>
                        <td>15</td>
                        <td>20%</td>
                        <td className="actions-table">
                            <i class="fas fa-edit"></i>
                            <i class="fas fa-trash"></i>
                        </td>
                    </tr>
    
                    <tr>
                        <td>8852</td>
                        <td>Sneakers</td>
                        <td>image</td>
                        <td>Clothes</td>
                        <td>Alver</td>
                        <td>700 DH</td>
                        <td>15</td>
                        <td>20%</td>
                        <td className="actions-table">
                            <i className="fas fa-edit"></i>
                            <i className="fas fa-trash"></i>
                        </td>
                    </tr>
    
                    
    
                </ table>
            </div>
        )
    }

    
}

export default Products
