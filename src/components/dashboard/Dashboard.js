import React from 'react'
import "./Dashboard.css"

const Dashboard = () => {
    return (
        <div className='container'>

        <h1>Dashboard</h1>
  
        <div className="order-data">
            <div className="order pending">
                <div className="stat-elements">
                  <h4>Orders Pending</h4>
                  <p>2</p>
                </div>
            </div>
  
            <div className="order canceled">
            <div className="stat-elements">
                  <h4>Orders Canceled</h4>
                  <p>0</p>
                </div>
            </div>
  
  
            <div className="order delivered">
            <div className="stat-elements">
                  <h4>Orders Delivered</h4>
                  <p>5</p>
                </div>
            </div>
        </div>
  
        <p className="recent">Recent Orders</p>
  
        <table>
 
            <tr>
            <th>Order Id</th>
            <th>Client Name</th>
            <th>Order Date</th>
            <th>Delivery Date</th>
            <th>Status </th>
            <th>Actions</th>
            </tr>

            <tr>
            <td>5548</td>
            <td>John Doe</td>
            <td>22/08/2017</td>
            <td>06/05/2017</td>
            <td>Pending</td>
            <td>Delete</td>
            </tr>

            <tr>
            <td>5548</td>
            <td>John Doe</td>
            <td>22/08/2017</td>
            <td>06/05/2017</td>
            <td>Pending</td>
            <td>Delete</td>
            </tr>

            <tr>
            <td>5548</td>
            <td>John Doe</td>
            <td>22/08/2017</td>
            <td>06/05/2017</td>
            <td>Pending</td>
            <td>Delete</td>
            </tr>

            <tr>
            <td>5548</td>
            <td>John Doe</td>
            <td>22/08/2017</td>
            <td>06/05/2017</td>
            <td>Pending</td>
            <td>Delete</td>
            </tr>

            <tr>
            <td>5548</td>
            <td>John Doe</td>
            <td>22/08/2017</td>
            <td>06/05/2017</td>
            <td>Pending</td>
            <td>Delete</td>
            </tr>

            
            
        </table>

  
      </div>
    )
}

export default Dashboard
