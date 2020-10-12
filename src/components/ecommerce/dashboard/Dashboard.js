import React, {Component} from 'react'
import Chart from "./Charts/Chart"

import "./Dashboard.css"


export default class DashBlog extends Component{


  constructor(){
    super();
    this.state = {
      monthlyProfit:{},
      newCustomersChartData: {}
    }
  }

  componentWillMount(){
    this.getChartData();
  }

  getChartData(){
    // Async call here to API

    this.setState({
        monthlyProfit:{
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets:[
          {
            label:'Profit',
            data:[
              810,
              600,
              540,
              400,
              1200,
              1614,
              810,
              600,
              540,
              400,
              1200,
              1614
            ],
            
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ]
          }
        ]
      },

      newCustomersChartData:{
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets:[
          {
            label:'Customers',
            data:[
              15,
              20,
              35,
              50,
              55,
              40,
              30,
              20,
              35,
              50,
              55,
              40,
              30,
            ],
            fill: false,
            borderColor: "#594f8d",
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ]
          }
        ]
      }
    });
  }



  
  render(){
     return (
        <div className='container'>

          <h1>Dashboard Ecommerce</h1>

          <div className="bar bar-first">Ecommerce Overview</div>

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

          <div className="bar">Statistics</div>
        
                <Chart 
                    monthlyProfit={this.state.monthlyProfit}  
                    newCustomersChartData={this.state.newCustomersChartData}
                    legendPosition="bottom"
                />

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
}

