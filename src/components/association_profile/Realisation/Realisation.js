import React, {Component} from 'react'
import {Link} from "react-router-dom"

import axios from 'axios';
import ReactPaginate from 'react-paginate';


class Realisation extends Component {

    state = {
        isLoading: true,
        products: null
    } 

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

    render(){
        return (
            <div className="container">
    
                <h1>Realisation</h1>
                <Link to='/AddRealisation'><button className="btn">Add New</button></Link>
    
                <div className="meta-table">
    
                        <div class="main-menu">
                            <h2 class="active" style={{width: '16rem'}}><i class="fa fa-trophy"></i>Realisation List</h2>     
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
                        <th>Description</th>
                        <th>Start Realisation</th>
                        <th>End Realisation </th>
                        <th>Place</th>
                        <th>Partners</th>
                        <th>Actions</th>
                    </tr>
    
                   
    
                    <tr>
                        <td>1</td>
                        <td>EXPERTISE IMMOBILIERE</td>
                        <td>Étant agréé par la RICS (Royal Institution of Chartered Surveyors) nos rapports.</td>
                        <td>09/01/2019 12:22</td>
                        <td>08/02/2019 14:22</td>
                        <td>Rabat</td>
                        <td>la RICS</td>
                        <td className="actions-table">
                            <i class="fas fa-edit"></i>
                            <i class="fas fa-trash"></i>
                        </td>
                    </tr>
    
                    <tr>
                        <td>2</td>
                        <td>COMMERCIALISATION</td>
                        <td>vent is a tech conference for copywriters, you can follow the thought pattern</td>
                        <td>09/01/2019 12:22</td>
                        <td>08/02/2019 14:22</td>
                        <td>Casa</td>
                        <td>REA PARTNERS</td>
                        <td className="actions-table">
                            <i class="fas fa-edit"></i>
                            <i class="fas fa-trash"></i>
                        </td>
                    </tr>
    
    
                    <tr>
                        <td>3 </td>
                        <td>INVESTMENT</td>
                        <td>Dotée d’une expertise confirmée et d’un large éventail de services</td>
                        <td>09/01/2019 12:22</td>
                        <td>08/02/2019 14:22</td>
                        <td>Asfi</td>
                        <td>REA INVESTMENT</td>
                        <td className="actions-table">
                            <i class="fas fa-edit"></i>
                            <i class="fas fa-trash"></i>
                        </td>
                    </tr>
    
                    <tr>
                        <td>4</td>
                        <td>CONSEIL</td>
                        <td>Etant notre principal métier, nous avons consacré la majeure partie de notre expérience</td>
                        <td>09/01/2019 12:22</td>
                        <td>08/02/2019 14:22</td>
                        <td>Taza</td>
                        <td>REA CONSEIL</td>
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

export default Realisation
