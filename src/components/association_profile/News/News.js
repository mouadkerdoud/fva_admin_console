import React, {Component} from 'react'
import {Link} from "react-router-dom"


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
    // async componentDidMount(){
    //     const url = ""
    //     const response = await fetch(url)
    //     const data = await response.json()
    //     this.setState({products:data, isLoading:false})
    // }

    render(){
        return (
            <div className="container">
    
                <h1>News</h1>
                <Link to='/AddNews'><button className="add-new-button">Add New</button></Link>
    
                <div className="meta-table">
    
                        <div className="main-menu">
                            <h2 className="active" style={{width: '12rem'}}><i className="fa fa-newspaper-o"></i>News List</h2>     
                        </div>
        
                        <div className="search-bar">
                            <input placeholder="Search News..." />
                            <i className="fas fa-search search-icon"></i>
                        </div>
    
                </div>
    
                
    
                <table className="table-prod">
     

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
                    <tr>
                        <td>1</td>
                        <td>Hallowen</td>
                        <td>vent is a tech conference for copywriters, you can follow the thought pattern</td>
                        <td>Image</td>
                        <td>Image</td>
                        <td className="actions-table">
                            <i className="fas fa-edit"></i>
                            <i className="fas fa-trash"></i>
                        </td>
                    </tr>
    
                    <tr>
                        <td>2</td>
                        <td>business </td>
                        <td>There are two main types of event name tools you can use to derive inspiration from.</td>
                        <td>Image</td>
                        <td>Image</td>
                        <td className="actions-table">
                            <i className="fas fa-edit"></i>
                            <i className="fas fa-trash"></i>
                        </td>
                    </tr>
    
    
                    <tr>
                        <td>3 </td>
                        <td>packet </td>
                        <td>be fooled by the term Party – this website also offers</td>
                        <td>Image</td>
                        <td>Image</td>
                        <td className="actions-table">
                            <i className="fas fa-edit"></i>
                            <i className="fas fa-trash"></i>
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
                </tbody>
                </ table>
            </div>
        )
    }

    
}

export default News
