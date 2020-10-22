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
        const url = "http://fva-backend-dev.herokuapp.com/api/shop/category/"
        const response = await fetch(url)
        const data = await response.json()
        const products_categories = data.results

        this.setState({products_categories:products_categories, isLoading:false})
        $(function () {
            $('#example').DataTable({
                "pagingType": "full_numbers",
                "lengthMenu": [[5, 10, 20, -1], [5, 10, 25, "All"]]
            })      
        });
    }


    render(){
        const {products_categories, isLoading} = this.state
        console.log(this.state)
        if (isLoading || !products_categories ) {
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
                            <th>Category ID</th>
                            <th>Category Title</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
    
    
                    <tbody>
                            {products_categories.map( (item,index)=>{
                                return(
                                    <tr key={index}>
                                        <td>{item.id}</td>
                                        <td>{item.category_title}</td>
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
