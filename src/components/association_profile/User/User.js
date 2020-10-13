import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import "./datatables.css"

import "./User.css"
const $ = require("jquery");
$.DataTable = require("datatables.net");

class User extends Component {

    state = {
        isLoading: true,
        users: null
    }
    async componentDidMount() {
      const url = "https://jsonplaceholder.typicode.com/users"
      const response = await fetch(url)
      const data = await response.json()
      this.setState({ users: data, isLoading: false });
      $(function () {
           $('#example').DataTable({
              "pagingType": "full_numbers",
              "lengthMenu": [[5, 10, 20, -1], [5, 10, 25, "All"]]
          });
    
          
      });
      
    }
    
    render(){
        const { users, isLoading } = this.state

    if (isLoading || !users) {
        return <div className="container">Loading ... </div>
    }
    else {
            return (
                <div className="container">

                    <h1>Users</h1>
                    <Link to='/AddUser'><button className="add-new-button">Add New</button></Link>

                    <div className="meta-table">

                        <div className="main-menu">
                            <h2 className="active" style={{width:"12rem"}}><i className="fa fa-users"></i>User List</h2>
                        </div>
                        

                    </div>



                    <table id="example" className="hover display compact row-border hover order-column" style={{ width: '100%' }}>
                    
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>City</th>
                            <th>Role</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                    this.state.users.map((user, i) => (
                       
                            <tr key={i}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.address.city}</td>
                                <td>{user.id % 2 === 0 ? "Admin" : "User"}</td>
                                <td className="actions-table">
                                    <i className="fas fa-edit"></i>
                                    <i className="fas fa-trash"></i>
                                </td>
                            </tr>
                      
                    ))
                    }
                      </tbody>
            </table>

                </div>
            )
        }

    }

}

export default User
