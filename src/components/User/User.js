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
      const url = "http://fva-backend-dev.herokuapp.com/api/app/user/"
      const response = await fetch(url)
      const data = await response.json()
      this.setState({ users: data.results, isLoading: false });
      $(function () {
           $('#example').DataTable({
              "pagingType": "full_numbers",
              "lengthMenu": [[5, 10, 20, -1], [5, 10, 25, "All"]]
          });
    
          
      });
    }

    deleteUser(UserID) {
        const currentUser = this.state.users
        this.setState({
            users: currentUser.filter(user => user.id !== UserID),
        });
        const url = 'http://fva-backend-dev.herokuapp.com/api/app/User/' + UserID
        fetch(url, {
            method: "DELETE"
        })
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



                <table id="example" className="table-User hover display compact row-border hover order-column" style={{ width: '100%' }}>
                <thead>
                        <tr>
                            <th>Photo</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>City</th>
                            <th>Points</th>
                            <th>Role</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {users.map((user, i) => (
                       
                            <tr key={i}>
                                <td>{<img className="img-news-list" alt="" src={user.photo} />}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.profile.phone_number}</td>
                                <td>{user.profile.city}</td>
                                <td>{user.profile.points}</td>
                                <td>{user.profile_distinction % 2 === 0 ? "Admin" : "User"}</td>
                                <td className="actions-table mission-manip">
                                    <i className="fas fa-edit"></i>
                                    <i className="fas fa-trash" onClick={() => { this.deleteUser(user.id) }}></i>
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
