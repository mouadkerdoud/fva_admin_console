import React from 'react'


const DashboardBlog = () => {
    return (
        <div className='container'>

          <h1>Dashboard Blog</h1>

          <div className="bar">Dashboard Overview</div>

          <div className="overview">

              <div className="stat-overview">

                  <div className="top-elements">
                    <span className="number income">114 </span>
                    <i className="fas fa-clipboard overview-icon"></i>
                  </div>

                  <p>Total Posts</p>
              </div>

              <div className="stat-overview">
                    <div className="top-elements">
                        <span className="number feedback">555</span>
                        <i className="fas fa-comments overview-icon"></i>
                    </div>
                      <p>Total Comments</p>
              </div>

              <div className="stat-overview">
                      <div className="top-elements">
                        <span className="number nbr-order">88</span>
                        <i className="fas fa-heart overview-icon"></i>
                      </div>
                      <p>Total Reactions</p>
              </div>

              <div className="stat-overview">
                    <div className="top-elements">
                        <span className="number nbr-users">158</span>
                        <i className="fas fa-users overview-icon"></i>
                    </div>
                      <p>Bloggers Number</p>
              </div>


          </div>

          <div className="bar">Posts Data</div>


    
          <p className="table-title">Recent Posts</p>
    
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

        <tbody >

           

            <tr>
                <td>123</td>
                <td>Title 1</td>
                <td>Tech</td>
                <td>Active</td>
                <td>22/07/2014</td>
                <td>55</td>
                <td className="actions-table">
                    <i className="fas fa-edit"></i>
                    <i className="fas fa-trash"></i>
                </td>
            </tr>

            <tr>
                <td>123</td>
                <td>Title 1</td>
                <td>Tech</td>
                <td>Active</td>
                <td>22/07/2014</td>
                <td>55</td>
                <td className="actions-table">
                    <i className="fas fa-edit"></i>
                    <i className="fas fa-trash"></i>
                </td>
            </tr>

            <tr>
                <td>123</td>
                <td>Title 1</td>
                <td>Tech</td>
                <td>Active</td>
                <td>22/07/2014</td>
                <td>55</td>
                <td className="actions-table">
                    <i className="fas fa-edit"></i>
                    <i className="fas fa-trash"></i>
                </td>
            </tr>

            <tr>
                <td>123</td>
                <td>Title 1</td>
                <td>Tech</td>
                <td>Active</td>
                <td>22/07/2014</td>
                <td>55</td>
                <td className="actions-table">
                    <i className="fas fa-edit"></i>
                    <i className="fas fa-trash"></i>
                </td>
            </tr>

            <tr>
                <td>123</td>
                <td>Title 1</td>
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


          </table>

  
      </div>
    )
}

export default DashboardBlog
