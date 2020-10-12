import React, {Component} from 'react'
import {Link} from "react-router-dom"


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
                    <Link to='/AddPost'><button className="btn">Add New</button></Link>
        
                    <div className="meta-table">
        
                        <div class="main-menu">
                            <h2 class="active"><i class="fa fa-clipboard"></i>Post List</h2>     
                        </div>
        
                        <div className="meta-table-field metatable col-3 ">
                            <input  />
                            <label>Search</label>
                            <span class="focus-border"></span>
                            <i className="fas fa-search search-icon"></i>
                        </div>
        
                    </div>
        
                    
                    <table className="table-prod">
        
                        <thead>
                            <tr>
                                <th>Post Id</th>
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
