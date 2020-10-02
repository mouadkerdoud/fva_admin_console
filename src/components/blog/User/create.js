
import React from 'react'
import { NavLink } from 'react-bootstrap'
import "./style.css" 




// Or CJS imports:


class AddUser extends React.Component {
    state={
            message:""
        }
        handleCkeditorState=(event,editor)=>{
            const data = editor.getData();
            this.setState({
                message:data
            })
            console.log(this.state);
        }
    render(){
      return(
        <div className="body">
        {/* Admin Navigation Bar */} 
        <div className="admin-wrapper">
                 {/* Left Side */}
    
                {/* Admin Content */}
                <div className="admin-content">
                    <div className="button-group">
                        <NavLink to="/AddUser" className="btn btn btn-lg">Add User </NavLink>
                        <NavLink to="/ManageUsers" className="btn btn btn-lg">Manage Users</NavLink>
                    </div>
                    <div className="content">
                        <h2 className="page-title display-4">Add User</h2>
                        <form methode="Post" className="forms" action="create.html"> 
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input type="text" id="username" name="username" placeholder="Enter Username" className="form-control" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" placeholder="Please Password" name="password" className="form-control" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <input type="password" id="confirmPassword" placeholder="Please Confirm Password" name="confirmPassword" className="form-control" required/>
                            </div>
                            <div className="form-group topic">
                                <label>Role</label>
                                <select name="role" class="form-control" >
                                    <option value="Admin">Admin</option>
                                    <option value="Author">Author</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <button className="btn add btn-lg">Add User</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
       )
    }

 }

export default AddUser