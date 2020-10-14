import React, {Component} from 'react'
import {Link} from "react-router-dom"

const $ = require("jquery");
$.DataTable = require("datatables.net");


class News extends Component {

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
          $('#example').DataTable({
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
    
                <h1>News</h1>
                <Link to='/AddNews'><button className="add-new-button">Add New</button></Link>
    
                <div className="meta-table">
    
                        <div className="main-menu">
                            <h2 className="active" style={{width: '12rem'}}><i className="fa fa-newspaper-o"></i>News List</h2>     
                        </div>

                </div>
    
                
    
                <table id="example" className="table-User hover display compact row-border hover order-column" style={{ width: '100%' }}>
     
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Content</th>
                            <th>Main Image</th>
                            <th>Thumbnail Image</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                   
                    <tbody>
                    {this.state.photos.slice(0,5).map((photo, i) => (
                        <tr key={i}>
                            <td>{photo.id}</td>
                            <td>Technology</td>
                            <td>{photo.title}</td>
                            <td>{photo.url}</td>
                            <td>{photo.thumbnailUrl}</td>
                            <td className="actions-table">
                                <i className="fas fa-edit"></i>
                                <i className="fas fa-trash"></i>
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

export default News
