import React, {Component} from 'react'
import {Link} from "react-router-dom"

const $ = require("jquery");
$.DataTable = require("datatables.net");


class Event extends Component {

    state = {
        isLoading: true,
        todos: null
    }
    async componentDidMount() {
      const url = "https://jsonplaceholder.typicode.com/todos"
      const response = await fetch(url)
      const data = await response.json()
      this.setState({ todos: data, isLoading: false });
      $(function () {
          $('#example').DataTable({
              "pagingType": "full_numbers",
              "lengthMenu": [[5, 10, 20, -1], [5, 10, 25, "All"]]
          });
    
          
      });
      
    }
    render(){
        const { todos, isLoading } = this.state

    if (isLoading || !todos) {
        return <div className="container">Loading ... </div>
    }
    else {
        return (
            <div className="container">
    
                <h1>Event</h1>
                <Link to='/AddEvent'><button className="add-new-button">Add New</button></Link>
    
                <div className="meta-table">
    
                        <div className="main-menu">
                            <h2 className="active" style={{width: '12rem'}}><i className="fa fa-table"></i>Event List</h2>     
                        </div>
        
    
                </div>
    
                
    
                <table id="example" className="table-User hover display compact row-border hover order-column" style={{ width: '100%' }}>
                <thead>     
                    <tr>
                        <th>Id</th>
                        <th>Price</th>
                        <th>Start Event</th>
                        <th>End Event </th>
                        <th>Reserve Befor</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    {this.state.todos.map(todo => {
                        return (
                                <tbody key={todo.id}>
                                    <tr>
                                        <td>{todo.id}</td>
                                        <td>700 DH</td>
                                        <td>09/01/2019 12:22</td>
                                        <td>08/02/2019 14:22</td>
                                        <td>08/10/2019 13:22</td>
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



export default Event
