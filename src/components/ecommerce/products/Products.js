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
    
                        <div class="main-menu">
                            <h2 class="active"><i class="fa fa-shopping-bag"></i>Products List</h2>     
                        </div>
        
                        <div className="meta-table-field metatable">
                            <input placeholder="Seach Post..." />
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
                        <th>Date Exp Discount</th>
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
                        <td>20/07/2018</td>
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
                        <td>20/07/2018</td>
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
                        <td>20/07/2018</td>
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
                        <td>20/07/2018</td>
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

export default Products
