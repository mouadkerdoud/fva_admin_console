import React, {Component} from 'react'
import {Link} from "react-router-dom"
const $ = require("jquery");
$.DataTable = require("datatables.net");

class CategoriesProducts extends Component {

    state = {
        isLoading: true,
        products_categories: null
    } 

    async componentDidMount(){
        const url = "http://fva-backend-dev.herokuapp.com/api/blog/category/"
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
                <h1>Categories</h1>
                <Link to='/AddCategoryProduct'><button className="add-new-button">Add New</button></Link>
    
                <div className="meta-table">
    
                    <div className="main-menu">
                        <h2 className="active" style={{width: '16rem'}}><i className="fa fa-list-ul"></i>Categories List</h2>     
                    </div>
        
                  
    
                </div>
    
                <table id="example" className="table-User hover display compact row-border hover order-column" style={{ width: '100%' }}>
     
                    <thead>
                        <tr>
                            <th>Category</th>
                            <th>Subcategory</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
    
    
                    <tbody>
                            {products.map( (item,index)=>{
                                return(
                                    <tr key={index}>
                                        <td>{item.category_name}</td>
                                        <td>{item.category_description}</td>
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

export default CategoriesProducts
