import React from 'react'
import { NavLink } from 'react-bootstrap'
import "./style.css" 


/**
* @author
* @function AddCategorie
**/


// Or CJS imports:


class AddCategorie extends React.Component {
   
    render(){
      return(
        <div className="body">
   
        {/* Admin Page Wrapper */}
        <div className="admin-wrapper">
   
    
                {/* Admin Content */}
                <div className="admin-content">
                    <div className="button-group">
                        <NavLink to="/AddCategorie" className="btn btn btn-lg">Add Categorie </NavLink>
                        <NavLink to="/ManageCategories" className="btn btn btn-lg">Manage Categories</NavLink>
                    </div>
                    <div className="content">
                        <h2 className="page-title display-4">Add Categorie</h2>
                        <form methode="Post" className="forms" action="create.html"> 
                            <div className="form-group">
                                <label>Categorie Name</label>
                                <input type="text" name="description" class="form-control" placeholder="Please Enter Categorie Name" />
                            </div>
                            <div className="form-group">
                                <label>Categorie Description</label>
                               
                            </div>
                            <div className="form-group">
                                <button className="btn add btn-lg">Add Categorie</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
       )
    }

 }

export default AddCategorie