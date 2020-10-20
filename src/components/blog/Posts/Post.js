import React, {Component} from 'react'
import {Link} from "react-router-dom"

const $ = require("jquery");
$.DataTable = require("datatables.net");

class Post extends Component {

    state = {
        isLoading: true,
        posts: null
    }


    async componentDidMount(){
        const url = "https://jsonplaceholder.typicode.com/posts"
        const response = await fetch(url)
        const data = await response.json()
        this.setState({posts:data, isLoading:false})
        $(function () {
            $('#example').DataTable({
                "pagingType": "full_numbers",
                "lengthMenu": [[5, 10, 20, -1], [5, 10, 25, "All"]]
            })      
        });

    }


    render(){
        const {posts, isLoading} = this.state

        if( isLoading || !posts ){
            return <div className="container">Loading ... </div>
        }
        else{

            return (
                <div className="container">
        
                    <h1>Posts</h1>
                    <Link to='/AddPost'><button className="add-new-button">Add New</button></Link>
        
                    <div className="meta-table">
        
                        <div className="main-menu">
                            <h2 className="active"><i className="fa fa-clipboard"></i>Post List</h2>     
                        </div>    
    
                        </div>
        
                    
                    <table id="example" className="table-User hover display compact row-border hover order-column" style={{ width: '100%' }}>
        
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Post Title</th>
                                <th>Category</th>
                                <th>Status</th>
                                <th>Date Published</th>
                                <th>Number Reactions</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        {posts.slice(0, 5).map(post=>{
                            return (
                                    <tbody key={post.id}>

                                        <tr>
                                            <td>{post.id}</td>
                                            <td>{post.title}</td>
                                            <td>Tech</td>
                                            <td>Active</td>
                                            <td>22/07/2014</td>
                                            <td>55</td>
                                            <td className="actions-table">
                                                <i className="fas fa-edit"></i>
                                                <i className="fas fa-trash"></i>
                                            </td>
                                        </tr>
                                    </tbody>

                            )
                        })}
                        
                        
        
        
                    </table>
                    
                </div>
            )
        }
    }
    
}

export default Post
