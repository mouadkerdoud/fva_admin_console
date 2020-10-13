import React, {Component} from 'react'
import {Link} from "react-router-dom"

class CategoryPost extends Component {

    state = {
        isLoading: true,
        post_categories: null
    } 


    // async componentDidMount(){
    //     const url = ""
    //     const response = await fetch(url)
    //     const data = await response.json()
    //     this.setState({post_categories:data, isLoading:false})
    // }

    render(){
        return (
            <div className="container">
                <h1>Post Categories</h1>
                <Link to='/AddCategoryPost'><button className="add-new-button">Add New</button></Link>
    
                <div className="meta-table">
    
                        <div className="main-menu">
                            <h2 className="active" style={{width: '16rem'}}><i className="fa fa-list-ul"></i>Categories List</h2>     
                        </div>
        
                        <div className="search-bar">
                            <input placeholder="Search Category Post..." />
                            <i className="fas fa-search search-icon"></i>   
                        </div>
    
    
                </div>
    
                <table className="table-prod">
     
                    <thead>
                        <tr>
                            <th>Category Post</th>
                            <th>Number Of Posts</th>
                            <th>Number Of Reactions</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                    <tr>
                        <td>Web development</td>
                        <td>14</td>
                        <td>144</td>
                        <td className="actions-table">
                            <i className="fas fa-edit"></i>
                            <i className="fas fa-trash"></i>
                        </td>
                    </tr>
    
                    <tr>
                        <td>Culture</td>
                        <td>3</td>
                        <td>10</td>
                        <td className="actions-table">
                            <i className="fas fa-edit"></i>
                            <i className="fas fa-trash"></i>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
    
}

export default CategoryPost
