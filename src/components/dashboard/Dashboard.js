import React from 'react'
import "./Dashboard.css"


const Dashboard = () => {
    return (
        <div className='container'>

          <h1>Dashboard</h1>

          <div className="bar">Ecommerce Overview</div>

          <div className="overview">

              <div className="stat-overview">

                  <div className="top-elements">
                    <span className="number income">7800 <span className="currency">DH</span></span>
                    <i className="fas fa-chart-pie overview-icon"></i>
                  </div>

                  <p>Total Profit</p>
              </div>

              <div className="stat-overview">
                    <div className="top-elements">
                        <span className="number feedback">122</span>
                        <i className="fas fa-thumbs-up overview-icon"></i>
                    </div>
                      <p>Total Feedback</p>
              </div>

              <div className="stat-overview">
                      <div className="top-elements">
                        <span className="number nbr-order">88</span>
                        <i className="fas fa-shopping-cart overview-icon"></i>
                      </div>
                      <p>Total Orders</p>
              </div>

              <div className="stat-overview">
                    <div className="top-elements">
                        <span className="number nbr-users">158</span>
                        <i className="fas fa-users overview-icon"></i>
                    </div>
                      <p>Customers Number</p>
              </div>


          </div>

          <div className="bar">Orders Data</div>


          <div className="order-data">
              <div className="order pending">
                  <div className="stat-orders">
                    <h4>Orders Pending</h4>
                    <p>2</p>
                  </div>
              </div>
    
              <div className="order canceled">
              <div className="stat-orders">
                    <h4>Orders Canceled</h4>
                    <p>0</p>
                  </div>
              </div>
    
    
              <div className="order delivered">
              <div className="stat-orders">
                    <h4>Orders Delivered</h4>
                    <p>5</p>
                  </div>
              </div>
          </div>
    
          <p className="table-title">Recent Orders</p>
    
          <table className="dash-table">
  
              <tr>
              <th>Order Id</th>
              <th>Client Name</th>
              <th>Order Date</th>
              <th>Delivery Date</th>
              <th>Discount</th>
              <th>Status </th>
              <th>Actions</th>
              </tr>

              <tr>
                <td>5548</td>
                <td>John Doe</td>
                <td>22/08/2017</td>
                <td>06/05/2017</td>
                <td>0%</td>
                <td>Pending</td>
                <td className="actions-table">
                    <i className="fas fa-edit"></i>
                    <i className="fas fa-trash"></i>
                </td>
              </tr>

              <tr>
                <td>5548</td>
                <td>John Doe</td>
                <td>22/08/2017</td>
                <td>06/05/2017</td>
                <td>20%</td>
                <td>Pending</td>
                <td className="actions-table">
                    <i className="fas fa-edit"></i>
                    <i className="fas fa-trash"></i>
                </td>
              </tr>

              

             

              <tr>
                <td>5548</td>
                <td>John Doe</td>
                <td>22/08/2017</td>
                <td>06/05/2017</td>
                <td>10%</td>
                <td>Pending</td>
                <td className="actions-table">
                    <i className="fas fa-edit"></i>
                    <i className="fas fa-trash"></i>
                </td>
              </tr>

              <tr>
                <td>5548</td>
                <td>John Doe</td>
                <td>22/08/2017</td>
                <td>06/05/2017</td>
                <td>10%</td>
                <td>Pending</td>
                <td className="actions-table">
                    <i className="fas fa-edit"></i>
                    <i className="fas fa-trash"></i>
                </td>
              </tr>


          </table>

  
      </div>
    )
}

export default Dashboard
