import React from 'react'
import { NavLink } from 'react-router-dom' 
import AddPost from './create';


/* Admin Styling */
import "./style.css" 

const ManagePost = (props) => {
  return(
    <div className="body">
        {/* Admin Navigation Bar */} 
    {/* Admin Page Wrapper */}
    <div className="admin-wrapper">
             {/* Left Side */}

            {/* Admin Content */}
            <div className="admin-content">
                <div className="button-group">  
                    <NavLink to="/AddPost" className="btn btn btn-lg">Add Post </NavLink>
                    <NavLink to="/" className="btn btn btn-lg">Manage Posts</NavLink>
                </div>
                <div className="content">
                    <h2 className="page-title display-4">Manage Posts</h2>
                    <table>
                        <thead>
                            <th>SN</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th colSpan="4">Action</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>This is My Post 1</td>
                                <td>Saad</td>
                                <td><a href="#" className="edit">Edit</a></td>
                                <td><a href="#" className="delete">Delete</a></td>
                                <td><a href="#" className="publish">Publish</a></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>This is My Post 2</td>
                                <td>Mina</td>
                                <td><a href="#" className="edit">Edit</a></td>
                                <td><a href="#" className="delete">Delete</a></td>
                                <td><a href="#" className="publish">Publish</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
   )

 }

export default ManagePost