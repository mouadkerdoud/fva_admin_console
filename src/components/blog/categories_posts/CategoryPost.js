import React from 'react'
import {Link} from "react-router-dom"

const CategoryPost = () => {
    return (
        <div className="container">
            <h1>Post Categories</h1>
            <Link to='/AddCategoryPost'><button className="btn">Add New</button></Link>

            <div className="meta-table">

                <div className="meta-table-title">Post Categories List</div>

                <div className="meta-table-field">
                    <input placeholder="Seach Post Category..." />
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

export default CategoryPost
