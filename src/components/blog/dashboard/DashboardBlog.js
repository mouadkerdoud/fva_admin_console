import React from 'react'
import { Link } from 'react-router-dom'
import "./Dashboard.css"


const DashboardBlog = () => {
    return (
        <div className='container'>

          <h1>Dashboard Blog</h1>


          <div className="overview">

             
              <div className="stat-overview">
                    <div className="top-elements">
                        <span className="number feedback">3</span>
                        <div class="icon-big icon-info text-center">
                          <i class="fa fa-check-square-o"></i>
                        </div>                  
                    </div>
                    <p>Blog Categories</p>
              </div>
              <div className="stat-overview">
                    <div className="top-elements">
                        <span className="number feedback">2</span>
                        <div class="icon-warning text-center">
                          <i className="fa fa-clipboard"></i>
                        </div>
                    </div>
                      <p>Blog Posts</p>
              </div>

              <div className="stat-overview">
                      <div className="top-elements">
                      <Link to='/AddPost'><button className="plus number nbr-order">+</button></Link>
                       <div class="icon-pen text-center">
                          <i className="fa fa-pencil-square-o"></i>
                          </div>
                      </div>
                      <p>New Post</p>
              </div>

              

          </div>

          <div className="stat-overview">
                      <div className="top-elements">
                      <h4>Your Blog Post</h4>
                      </div>
                      <table class="table table-striped">
                        <thead className="thead">
                        <tr>
                        
                          <th width="80">Edit</th>
                          
                          <th width="198">Images</th>
                        
                          <th >Title</th>
                          
                          
                          <th width="120">Date</th>
                        
                        </tr>
                        </thead>
                       </table> 
              </div>
  
      </div>
    )
}

export default DashboardBlog
