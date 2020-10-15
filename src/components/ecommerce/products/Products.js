import React, {Component} from 'react'
import {Link} from "react-router-dom"
import "./Products.css"

const $ = require("jquery");
$.DataTable = require("datatables.net");

class Products extends Component {

    state = {
        isLoading: true,
        products: null
    } 

    async componentDidMount(){
        const url = "http://fva-backend-dev.herokuapp.com/api/shop/ListProduct/"
        const response = await fetch(url)
        const data = await response.json()
        const data_products = data.results
        console.log(data_products)
        this.setState({products:data_products, isLoading:false})
        $(function () {
            $('#example').DataTable({
                "pagingType": "full_numbers",
                "lengthMenu": [[5, 10, 20, -1], [5, 10, 25, "All"]]
            })      
        });
    }

    render(){

        const {products, isLoading} = this.state
        if (isLoading || !products ) {
            return <div className="container">Loading ... </div>
        }else{
            return (
                <div className="container">
        
                    <h1>Products</h1>
                    <Link to='/AddProduct'><button className="add-new-button">Add New</button></Link>
        
                    <div className="meta-table">
        
                            <div className="main-menu">
                                <h2 className="active"><i className="fa fa-shopping-bag"></i>Products List</h2>     
                            </div>
        
                    </div>
        
                    
        
                    <table id="example" className="table-User hover display compact row-border hover order-column" style={{ width: '100%' }}>
         
                        <thead>
                        <tr>
                            <th>Product Id</th>
                            <th>Product Name</th>
                            <th>Image</th>
                            <th>Category</th>
                            <th>Brand</th>
                            <th>Model</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
        
                        <tbody>
                            {products.map( (item,index)=>{
                                return(
                                    <tr key={index}>
                                        <td>{item.id}</td>
                                        <td>{item.product_title}</td>
                                        <td>Image</td>
                                        <td>{item.category.category_title}</td>
                                        <td>{item.brand.brand_name}</td>
                                        <td>{item.product_model}</td>
                                        <td>{item.price}<span className="currency-product">DH</span></td>
                                        <td>{item.quantity}</td>
                                        <td className="actions-table">
                                            <i className="fas fa-edit"></i>
                                            <i className="fas fa-trash"></i>
                                        </td>
                                    </tr>
                                )
                            } )}
                        </tbody>
                    </ table>
                </div>
            )
        }
       
    }

    
}

export default Products
