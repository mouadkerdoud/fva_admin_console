import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import "./User.css"

import axios from 'axios';
import ReactPaginate from 'react-paginate';

class User extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            offset: 0,
            Users: [],
            isLoading:true,
            orgUsers: [],
            perPage: 5,
            currentPage: 0
        }
    } 

    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.loadMoreData()
        });

    };

    loadMoreData() {
		const data = this.state.orgUsers;
		
		const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
		this.setState({
			pageCount: Math.ceil(data.length / this.state.perPage),
			Users:slice
		})
	
    }

    componentDidMount(){
        this.getUser();
    }

    getUser() {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then(res => {

                var data = res.data;
				
                var slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
                

                this.setState({
                    pageCount: Math.ceil(data.length / this.state.perPage),
                    orgUsers :res.data,
                    Users:slice,
                    isLoading:false
                })
            });
    }

    
    render(){
        const {Users,isLoading} = this.state;

        if(!Users || isLoading){
            return <div className="container">Loading ... </div>
        }
        else{
            return (
                <div className="container">

                    <h1>Users</h1>
                    <Link to='/AddUser'><button className="btn">Add New</button></Link>

                    <div className="meta-table">

                        <div class="main-menu">
                            <h2 class="active" style={{width:"12rem"}}><i class="fa fa-users"></i>User List</h2>
                        </div>
                        <div className="meta-table-field metatable col-3 input-effect">
                            <input  className="effect-16" />
                            <label>Search</label>
                            <span class="focus-border"></span>
                            <i className="fas fa-search search-icon"></i>
                        </div>

                    </div>



                    <table className="table-User">

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
                            {
                          this.state.Users.map((user, i) => (
                                <tr>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.address.city}</td>
                                    <td>{user.id % 2 === 0 ? "Admin": "User"}</td>
                                    <td className="actions-table">
                                        <i className="fas fa-edit"></i>
                                        <i className="fas fa-trash"></i>
                                    </td>
                                </tr>
                            
                          ))
                        }


                    </ table>
                    <ReactPaginate
                    previousLabel={"<"}
                    nextLabel={">"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick.bind(this)}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
                </div>
            )
        }

    }

}

export default User
