import React, {Component} from 'react'
import {Link} from "react-router-dom"

class CategoryPost extends Component {

    state = {
        isLoading: true,
        post_categories: null
    } 


    async componentDidMount(){
        const url = ""
        const response = await fetch(url)
        const data = await response.json()
        this.setState({post_categories:data, isLoading:false})
    }

    render(){
        return (
            <div className="container">
                <h1>Post Categories</h1>
                <Link to='/AddCategoryPost'><button className="btn">Add New</button></Link>
    
                <div className="meta-table">
    
                        <div class="main-menu">
                            <h2 class="active" style={{width: '16rem'}}><i class="fa fa-list-ul"></i>Categories List</h2>     
                        </div>
        
                        <div className="meta-table-field metatable col-3 input-effect">
                            <input  className="effect-16" />
                            <label>Search</label>
                            <span class="focus-border"></span>
                            <i className="fas fa-search search-icon"></i>
                        </div>
    
                </div>
    
                <table className="table-prod">
     
                    <tr>
                        <th>Category Post</th>
                        <th>Number Of Posts</th>
                        <th>Number Of Reactions</th>
                        <th>Actions</th>
                    </tr>
    
                    <tr>
                        <td>Web development</td>
                        <td>14</td>
                        <td>144</td>
                        <td className="actions-table">
                            <i class="fas fa-edit"></i>
                            <i class="fas fa-trash"></i>
                        </td>
                    </tr>
    
                    <tr>
                        <td>Humanity</td>
                        <td>8</td>
                        <td>55</td>
                        <td className="actions-table">
                            <i class="fas fa-edit"></i>
                            <i class="fas fa-trash"></i>
                        </td>
                    </tr>
    
                    <tr>
                        <td>Tech</td>
                        <td>15</td>
                        <td>65</td>
                        <td className="actions-table">
                            <i class="fas fa-edit"></i>
                            <i class="fas fa-trash"></i>
                        </td>
                    </tr>
    
                    <tr>
                        <td>Culture</td>
                        <td>3</td>
                        <td>10</td>
                        <td className="actions-table">
                            <i class="fas fa-edit"></i>
                            <i class="fas fa-trash"></i>
                        </td>
                    </tr>
                
                </table>
            </div>
        )
    }
    
}

export default CategoryPost
