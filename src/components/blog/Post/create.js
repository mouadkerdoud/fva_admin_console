
import React from 'react'
import "./style.css" 
import {NavLink } from 'react-router-dom' 


// Or CJS imports:


class AddPost extends React.Component {
    
    render(){
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
                        <h2 className="page-title display-4">Add Post</h2>
                        <form methode="Post" className="forms" action="create.html"> 
                            <div className="form-group">
                                <label>Title</label>
                                <input type="text" name="Title" class="form-control" placeholder="Please Enter Title" />
                            </div>
                            <div className="form-group">
                                <label>Body</label>
                               
                            </div>
                            <div className="form-group">
                                <label htmlFor="image">Image</label>
                                <input type="file" id="image" name="image"className="form-control" required/>
                            </div>
                            <div className="form-group topic">
                                <label>Categrorie</label>
                                <select name="Topic" class="form-control" >
                                    <option value="culture">Culture</option>
                                    <option value="poetry">Poetry</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <button className="btn add btn-lg">Add Post</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
       )
    }

 }

export default AddPost