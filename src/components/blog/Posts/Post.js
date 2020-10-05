import React from 'react'
import {Link} from "react-router-dom"

const Post = () => {
    return (
        <div className="container">

            <h1>Posts</h1>
            <Link to='/AddPost'><button className="btn">Add New</button></Link>

            <div className="meta-table">

                <div className="meta-table-title">Posts List</div>

                <div className="meta-table-field">
                    <input placeholder="Seach Post..." />
                    <i className="fas fa-search search-icon"></i>
                </div>

            </div>

            
            <table className="table-prod">
 
                <tr>
                    <th>Post Id</th>
                    <th>Post Title</th>
                    <th>Category</th>
                    <th>Status</th>
                    <th>Date Published</th>
                    <th>Number Reactions</th>
                    <th>Actions</th>
                </tr>

                <tr>
                    <td>223</td>
                    <td>React Components</td>
                    <td>Web Development</td>
                    <td>Active</td>
                    <td>22-07-2017</td>
                    <td>44</td>
                    <td className="actions-table">
                        <i class="fas fa-edit"></i>
                        <i class="fas fa-trash"></i>
                    </td>
                </tr>

              
                <tr>
                    <td>663</td>
                    <td>Women's role</td>
                    <td>Humanity</td>
                    <td>Active</td>
                    <td>06-10-2017</td>
                    <td>52</td>
                    <td className="actions-table">
                        <i class="fas fa-edit"></i>
                        <i class="fas fa-trash"></i>
                    </td>
                </tr>


                <tr>
                    <td>441</td>
                    <td>Docker</td>
                    <td>Tech</td>
                    <td>Active</td>
                    <td>06-12-2017</td>
                    <td>44</td>
                    <td className="actions-table">
                        <i class="fas fa-edit"></i>
                        <i class="fas fa-trash"></i>
                    </td>
                </tr>

                <tr>
                    <td>556</td>
                    <td>The gaming evolution</td>
                    <td>Culture</td>
                    <td>Active</td>
                    <td>22-07-2017</td>
                    <td>44</td>
                    <td className="actions-table">
                        <i class="fas fa-edit"></i>
                        <i class="fas fa-trash"></i>
                    </td>
                </tr>

                <tr>
                    <td>223</td>
                    <td>React Components</td>
                    <td>Web Development</td>
                    <td>Active</td>
                    <td>22-07-2017</td>
                    <td>44</td>
                    <td className="actions-table">
                        <i class="fas fa-edit"></i>
                        <i class="fas fa-trash"></i>
                    </td>
                </tr>
                
                <tr>
                    <td>663</td>
                    <td>Women's role</td>
                    <td>Humanity</td>
                    <td>Active</td>
                    <td>06-10-2017</td>
                    <td>52</td>
                    <td className="actions-table">
                        <i class="fas fa-edit"></i>
                        <i class="fas fa-trash"></i>
                    </td>
                </tr>


            </table>
            
        </div>
    )
}

export default Post
