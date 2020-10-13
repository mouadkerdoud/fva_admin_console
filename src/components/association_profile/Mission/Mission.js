import React, {Component} from 'react'
import {Link} from "react-router-dom"

const $ = require("jquery");
$.DataTable = require("datatables.net");


class Mission extends Component {

    state = {
        isLoading: true,
        photos: null
    }
    async componentDidMount() {
      const url = "https://jsonplaceholder.typicode.com/photos"
      const response = await fetch(url)
      const data = await response.json()
      this.setState({ photos: data, isLoading: false });
      $(function () {
          var table = $('#example').DataTable({
              "pagingType": "full_numbers",
              "lengthMenu": [[5, 10, 20, -1], [5, 10, 25, "All"]]
          });
    
          
      });
      
    }
    render(){
        const { photos, isLoading } = this.state;

        if (isLoading || !photos) {
            return <div className="container">Loading ... </div>
        }
        else {
        return (
            <div className="container">
    
                <h1>Missions</h1>
                <Link to='/AddMission'><button className="btn">Add New</button></Link>
    
                <div className="meta-table">
    
                        <div class="main-menu">
                            <h2 class="active" style={{width: '13rem'}}><i class="fa fa fa-black-tie"></i>Missions List</h2>     
                        </div>
        
    
                </div>
    
                
    
                <table id="example" className="table-User hover display compact row-border hover order-column" style={{ width: '100%' }}>
                <thead>     
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Content</th>
                        <th>Avatar Image</th>
                        <th>Actions</th>
                    </tr>
                </thead>     

                <tbody>
                    {
                        
                    this.state.photos.slice(0,5).map((photo, i) => (
                        <tr>
                            <td>{photo.id}</td>
                            <td>business</td>
                            <td>{photo.title}</td>
                            <td>{photo.url}</td>
                            <td className="actions-table">
                                <i class="fas fa-edit"></i>
                                <i class="fas fa-trash"></i>
                            </td>
                        </tr>
                    ))
                    }
                </tbody>    
    
                </ table>
               
            </div>
        )
    }
    }

}

export default Mission
