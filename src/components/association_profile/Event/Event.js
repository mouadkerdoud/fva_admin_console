import React, {Component} from 'react'
import {Link} from "react-router-dom"
import Moment from 'moment';

const $ = require("jquery");
$.DataTable = require("datatables.net");


class Event extends Component {

    state = {
        isLoading: true,
        Events: []
    }
    async componentDidMount() {
      const url = "http://fva-backend-dev.herokuapp.com/api/app/event/"
      const response = await fetch(url)
      const data = await response.json()
      console.log(data);
      this.setState({ Events: data.results, isLoading: false });
      $(function () {
          $('#example').DataTable({
              "pagingType": "full_numbers",
              "lengthMenu": [[5, 10, 20, -1], [5, 10, 25, "All"]]
          })      
      });
      
    }
    
    deleteEvent(EventID){
        const currentEvent = this.state.Events
        this.setState({
            Events: currentEvent.filter(event => event.id !== EventID),
          });
        const url='http://fva-backend-dev.herokuapp.com/api/app/event/'+EventID
         fetch(url, {
            method : "DELETE"
        })
    }
    render(){
        const { Events, isLoading } = this.state

    if (isLoading || !Events) {
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
                        <th>Title</th>
                        <th>Short Description</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Start Event</th>
                        <th>End Event</th>
                        <th>Before Event</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {Events.map((Event,i) => {
                        return (
                                    <tr key={i}>
                                        <td>{Event.id}</td>
                                        <td>{Event.title}</td>
                                        <td>{Event.short_description}</td>
                                        <td>{Event.description}</td>
                                        <td>{Event.price}</td>
                                        <td>{Moment(Event.start_at).format('DD-MM-YYYY')}</td>
                                        <td>{Moment(Event.end_at).format('DD-MM-YYYY')}</td>
                                        <td>{Moment(Event.reserve_before).format('DD-MM-YYYY')}</td>
                                        <td className="actions-table event-table">
                                            <button className="btnEdit">
                                                <Link to={"/EditEvent/"+Event.id} className="linkEdit" >
                                                    <i className="fas fa-edit"></i>
                                                </Link>
                                            </button>
                                            <i className="fas fa-trash" onClick={()=>{this.deleteEvent(Event.id)}}></i>
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



export default Event
