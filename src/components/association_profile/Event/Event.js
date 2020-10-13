import React, {Component} from 'react'
import {Link} from "react-router-dom"



class Event extends Component {

    state = {
        isLoading: true,
        products: null
    } 


    async componentDidMount(){
        const url = ""
        const response = await fetch(url)
        const data = await response.json()
        this.setState({products:data, isLoading:false})
    }

    render(){
        return (
            <div className="container">
    
                <h1>Event</h1>
                <Link to='/AddEvent'><button className="add-new-button">Add New</button></Link>
    
                <div className="meta-table">
    
                        <div class="main-menu">
                            <h2 class="active" style={{width: '12rem'}}><i class="fa fa-table"></i>Event List</h2>     
                        </div>
        
                        <div className="search-bar">
                            <input placeholder="Search Event..." />
                            <i className="fas fa-search search-icon"></i>
                        </div>
    
    
                </div>
    
                
    
                <table className="table-prod">
     
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Short Description</th>
                        <th>Is Paid</th>
                        <th>Price</th>
                        <th>Start Event</th>
                        <th>End Event </th>
                        <th>Reserve Befor</th>
                        <th>Actions</th>
                    </tr>
    
                   
    
                    <tr>
                        <td>1</td>
                        <td>Hallowen</td>
                        <td>vent is a tech conference for copywriters, you can follow the thought pattern</td>
                        <td>True</td>
                        <td>700 DH</td>
                        <td>09/01/2019 12:22</td>
                        <td>08/02/2019 14:22</td>
                        <td>08/10/2019 13:22</td>
                        <td className="actions-table">
                            <i class="fas fa-edit"></i>
                            <i class="fas fa-trash"></i>
                        </td>
                    </tr>
    
                    <tr>
                        <td>2</td>
                        <td>business </td>
                        <td>There are two main types of event name tools you can use to derive inspiration from.</td>
                        <td>False</td>
                        <td>700 DH</td>
                        <td>09/01/2018 12:22</td>
                        <td>08/02/2018 14:22</td>
                        <td>08/10/2018 13:22</td>
                        <td className="actions-table">
                            <i class="fas fa-edit"></i>
                            <i class="fas fa-trash"></i>
                        </td>
                    </tr>
    
    
                    <tr>
                        <td>3 </td>
                        <td>packet </td>
                        <td>be fooled by the term Party – this website also offers</td>
                        <td>False</td>
                        <td>600 DH</td>
                        <td>09/06/2018 12:22</td>
                        <td>28/07/2018 14:22</td>
                        <td>02/07/2018 13:22</td>
                        <td className="actions-table">
                            <i class="fas fa-edit"></i>
                            <i class="fas fa-trash"></i>
                        </td>
                    </tr>
    
                    <tr>
                        <td>4</td>
                        <td>packet </td>
                        <td>ike their idea you can also check out their event details to get even more inspiration.</td>
                        <td>True</td>
                        <td>800 DH</td>
                        <td>09/10/2018 12:22</td>
                        <td>28/11/2018 14:22</td>
                        <td>02/11/2018 13:22</td>
                        <td className="actions-table">
                            <i className="fas fa-edit"></i>
                            <i className="fas fa-trash"></i>
                        </td>
                    </tr>
    
                    
    
    
                </ table>
            </div>
        )
    }

    
}

export default Event
