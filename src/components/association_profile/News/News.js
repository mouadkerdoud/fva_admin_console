import React, {Component} from 'react'
import {Link} from "react-router-dom"

import axios from 'axios';
import ReactPaginate from 'react-paginate';


class News extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            offset: 0,
            Users: [],
            isLoading:true,
            orgUsers: [],
            perPage: 5,
            currentPage: 0
        }
    }

    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.loadMoreData()
        });

    };

    loadMoreData() {
		const data = this.state.orgUsers;
		
		const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
		this.setState({
			pageCount: Math.ceil(data.length / this.state.perPage),
			Users:slice
		})
	
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
    
                <h1>News</h1>
                <Link to='/AddNews'><button className="btn">Add New</button></Link>
    
                <div className="meta-table">
    
                        <div class="main-menu">
                            <h2 class="active" style={{width: '12rem'}}><i class="fa fa-newspaper-o"></i>News List</h2>     
                        </div>
        
                        <div className="meta-table-field metatable col-3 input-effect">
                            <input  className="effect-16" />
                            <label>Search</label>
                            <span class="focus-border"></span>
                            <i className="fas fa-search search-icon"></i>
                        </div>
    
                </div>
    
                
    
                <table className="table-prod">
     
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Content</th>
                        <th>Main Image</th>
                        <th>Thumbnail Image</th>
                        <th>Actions</th>
                    </tr>
    
                   
    
                    <tr>
                        <td>1</td>
                        <td>Hallowen</td>
                        <td>vent is a tech conference for copywriters, you can follow the thought pattern</td>
                        <td>Image</td>
                        <td>Image</td>
                        <td className="actions-table">
                            <i class="fas fa-edit"></i>
                            <i class="fas fa-trash"></i>
                        </td>
                    </tr>
    
                    <tr>
                        <td>2</td>
                        <td>business </td>
                        <td>There are two main types of event name tools you can use to derive inspiration from.</td>
                        <td>Image</td>
                        <td>Image</td>
                        <td className="actions-table">
                            <i class="fas fa-edit"></i>
                            <i class="fas fa-trash"></i>
                        </td>
                    </tr>
    
    
                    <tr>
                        <td>3 </td>
                        <td>packet </td>
                        <td>be fooled by the term Party – this website also offers</td>
                        <td>Image</td>
                        <td>Image</td>
                        <td className="actions-table">
                            <i class="fas fa-edit"></i>
                            <i class="fas fa-trash"></i>
                        </td>
                    </tr>
    
                    <tr>
                        <td>4</td>
                        <td>packet </td>
                        <td>ike their idea you can also check out their event details to get even more inspiration.</td>
                        <td>Image</td>
                        <td>Image</td>
                        <td className="actions-table">
                            <i className="fas fa-edit"></i>
                            <i className="fas fa-trash"></i>
                        </td>
                    </tr>
                </ table>
                <ReactPaginate
                    previousLabel={"<"}
                    nextLabel={">"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick.bind(this)}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
            </div>
        )
    }

    
}

export default News
