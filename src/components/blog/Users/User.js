import React from 'react'
import {Link} from "react-router-dom"
import "./User.css"


const User = () => {
   

    return (
        <div className="container">

            <h1>User</h1>
{/*             <Link to='/AddUser'><button className="btn">Add New</button></Link>
 */}
            <div className="meta-table">

                <div className="meta-table-title">User List</div>

                <div className="meta-table-field">
                    <input placeholder="Seach User..." />
                    <i className="fas fa-search search-icon"></i>
                </div>

            </div>

            

            <table className="table-User">
 
                <tr>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Date-Birthday</th>
                    <th>City</th>
                    <th>Role</th>
                    <th>Actions</th>
                </tr>

               
                <tr>
                    <td>1</td>
                    <td>FatimaZAHRA</td>
                    <td>ELouaty</td>
                    <td>Fatima02@gmail.com</td>
                    <td>1997/08/14</td>
                    <td>Mohamadia</td>
                    <td>Admin</td>
                    <td className="actions-table">
                        <i class="fas fa-edit"></i>
                        <i class="fas fa-trash"></i>
                    </td>
                </tr>

                <tr>
                    <td>2</td>
                    <td>Mouad</td>
                    <td>Kerdoud</td>
                    <td>MouadKer@gmail.com</td>
                    <td>1998/09/12</td>
                    <td>Rabat</td>
                    <td>Admin</td>
                    <td className="actions-table">
                        <i class="fas fa-edit"></i>
                        <i class="fas fa-trash"></i>
                    </td>
                </tr>


                <tr>
                    <td>3</td>
                    <td>Aissam</td>
                    <td>Jedli</td>
                    <td>Aissam@gmail.com</td>
                    <td>1992/04/14</td>
                    <td>Casa</td>
                    <td>Admin</td>
                    <td className="actions-table">
                        <i class="fas fa-edit"></i>
                        <i class="fas fa-trash"></i>
                    </td>
                </tr>

                <tr>
                    <td>4</td>
                    <td>Tarik</td>
                    <td>Jebrouni</td>
                    <td>Tarik.hani74@gmail.com</td>
                    <td>1998/08/27</td>
                    <td>Sale El Jadida</td>
                    <td>Admin</td>
                    <td className="actions-table">
                        <i class="fas fa-edit"></i>
                        <i class="fas fa-trash"></i>
                    </td>
                </tr>


                <tr>
                    <td>5</td>
                    <td>Meyame</td>
                    <td>Boubghy</td>
                    <td>MeryBo@gmail.com</td>
                    <td>1999/02/27</td>
                    <td>Sale</td>
                    <td>User</td>
                    <td className="actions-table">
                        <i class="fas fa-edit"></i>
                        <i class="fas fa-trash"></i>
                    </td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Hanane</td>
                    <td>Ellouaty</td>
                    <td>HanaeEl@gmail.com</td>
                    <td>1994/06/22</td>
                    <td>Casa</td>
                    <td>Admin</td>
                    <td className="actions-table">
                        <i class="fas fa-edit"></i>
                        <i class="fas fa-trash"></i>
                    </td>
                </tr>

            </ table>
        </div>
    )
}

export default User
