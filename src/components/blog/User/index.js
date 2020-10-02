import React from 'react'
import { NavLink } from 'react-router-dom' 
import AddPost from './create';


/* Admin Styling */
import "./style.css" 


const ManageUsers = (props) => {
  return(
    <div className="body">
 
    <div className="admin-wrapper">

            <div className="admin-content">
                <div className="button-group"> 
                    <NavLink to="/AddUser" className="btn btn btn-lg">Add User </NavLink>
                    <NavLink to="/ManageUsers" className="btn btn btn-lg">Manage Users</NavLink>
                </div>
                <div className="content">
                    <h2 className="page-title display-4">Manage Users</h2>
                    <table>
                        <thead>
                            <th>SN</th>
                            <th>Username</th>
                            <th>Role</th>
                            <th colSpan="4">Action</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Fatima Zahra</td>
                                <td>Admin</td>
                                <td><a href="#" className="edit">Edit</a></td>
                                <td><a href="#" className="delete">Delete</a></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Mouad</td>
                                <td>Author</td>
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

export default ManageUsers