import React, {Component} from 'react'
import Chart from "./charts/Chart"
import "./DashBlog.css"

export default class DashBlog extends Component {
     constructor(){
        super();
        this.state = {
          reactionsChartData:{},
          newBloggersChartData: {}
        }
      }
    
      componentWillMount(){
        this.getChartData();
      }
    
      getChartData(){
        // Async call here to API

        this.setState({
            reactionsChartData:{
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', "Sunday"],
            datasets:[
              {
                label:'Reactions',
                data:[
                  15,
                  8,
                  6,
                  5,
                  4,
                  12,
                  16
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

          newBloggersChartData:{
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets:[
              {
                label:'Users',
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
        
            <h1>Dashboard Blog</h1>
        
            <div className="bar bar-first">Dashboard Blog Overview</div>
        
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
        
            <div className="bar">General Data</div>
        
                <Chart 
                    reactionsChartData={this.state.reactionsChartData}  
                    newBloggersChartData={this.state.newBloggersChartData}
                    legendPosition="bottom"
                />

        
            <p className="table-title">Recent Posts</p>
        
            <table className="dash-blog-table">
            
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
}

