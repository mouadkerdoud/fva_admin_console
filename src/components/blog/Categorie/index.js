import React from 'react'
import { Link, NavLink } from 'react-router-dom' 


/* Admin Styling */
import "./style.css" 
/**
* @author
* @function ManageCategories
**/

const ManageCategories = (props) => {
  const url="create.js"; 
  return(
    <div className="body">
        {/* Admin Navigation Bar */} 
    {/* Admin Page Wrapper */}
    <div className="admin-wrapper">
             {/* Left Side */}


            {/* Admin Content */}
            <div className="admin-content">
                <div className="button-group"> 
                    <NavLink to="/AddCategorie" className="btn btn btn-lg">Add Categorie </NavLink>
                    <NavLink to="/ManageCategories" className="btn btn btn-lg">Manage Categories</NavLink>
                </div>
                <div className="content">
                    <h2 className="page-title display-4">Manage Categories</h2>
                    <table>
                        <thead>
                            <th>SN</th>
                            <th>Title</th>
                            <th colSpan="2">Action</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>This is My Post 1</td>
                                <td><a href="#" className="edit">Edit</a></td>
                                <td><a href="#" className="delete">Delete</a></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>This is My Post 2</td>
                                <td><a href="#" className="edit">Edit</a></td>
                                <td><a href="#" className="delete">Delete</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
   )

 }

export default ManageCategories