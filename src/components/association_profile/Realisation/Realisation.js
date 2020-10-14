import React, {Component} from 'react'
import {Link} from "react-router-dom"
 
const $ = require("jquery");
$.DataTable = require("datatables.net");


class Realisation extends Component {

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
          })      
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
    
                <h1>Realisation</h1>
                <Link to='/AddRealisation'><button className="add-new-button">Add New</button></Link>
    
                <div className="meta-table">
    
                        <div className="main-menu">
                            <h2 className="active" style={{width: '16rem'}}><i className="fa fa-trophy"></i>Realisation List</h2>     
                        </div>
        
                </div>
    
            
                <table id="example" className="table-User hover display compact row-border hover order-column" style={{ width: '100%' }}>
     
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Start Realisation</th>
                            <th>End Realisation </th>
                            <th>Place</th>
                            <th>Partners</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                   
                    <tbody>
                    {this.state.todos.slice(0,40).map((todo,i) => {
                        return (
                                <tr key={i}>
                                    <td>{todo.id}</td>
                                    <td>EXPERTISE CONSEIL</td>
                                    <td>{todo.title}</td>
                                    <td>09/01/2019 12:22</td>
                                    <td>08/02/2019 14:22</td>
                                    <td>Rabat</td>
                                    <td>la RICS</td>
                                    <td className="actions-table">
                                        <i className="fas fa-edit"></i>
                                        <i className="fas fa-trash"></i>
                                    </td>
                                </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        )
    }
    }
    
}

export default Realisation
