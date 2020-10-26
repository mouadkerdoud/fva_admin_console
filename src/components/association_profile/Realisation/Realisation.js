import React, { Component } from 'react'
import { Link } from "react-router-dom"
import Moment from 'moment';

const $ = require("jquery");
$.DataTable = require("datatables.net");


class Realisation extends Component {

    state = {
        isLoading: true,
        realisation: []
    }
    async componentDidMount() {
        const url = "http://fva-backend-dev.herokuapp.com/api/app/realisation/"
        const response = await fetch(url)
        const data = await response.json()
        this.setState({ realisation: data.results, isLoading: false });
        $(function () {
            $('#example').DataTable({
                "pagingType": "full_numbers",
                "lengthMenu": [[5, 10, 20, -1], [5, 10, 25, "All"]]
            })
        });

    }

    deleteRealisation(RealisationID) {
        const currentRealisation = this.state.realisation
        this.setState({
            realisation: currentRealisation.filter(realisation => realisation.id !== RealisationID),
        });
        const url = 'http://fva-backend-dev.herokuapp.com/api/app/realisation/' + RealisationID
        fetch(url, {
            method: "DELETE"
        })
    }

    render() {
        const { realisation, isLoading } = this.state

        if (isLoading || !realisation) {
            return <div className="container">Loading ... </div>
        }
        else {
            return (
                <div className="container">

                    <h1>Realisation</h1>
                    <Link to='/AddRealisation'><button className="add-new-button">Add New</button></Link>

                    <div className="meta-table">

                        <div className="main-menu">
                            <h2 className="active" style={{ width: '16rem' }}><i className="fa fa-trophy"></i>Realisation List</h2>
                        </div>

                    </div>


                    <table id="example" className="table-User hover display compact row-border hover order-column" style={{ width: '100%' }}>

                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Start Date</th>
                                <th>End Date</th>
                                <th>Place</th>
                                <th>Partners</th>
                                <th>Image</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {realisation.map((item, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{item.id}</td>
                                        <td>{item.title}</td>
                                        <td>{item.description}</td>
                                        <td>{Moment(item.start_at).format('DD-MM-YYYY')}</td>
                                        <td>{Moment(item.ended_at).format('DD-MM-YYYY')}</td>
                                        <td>{item.place}</td>
                                        <td>{item.partners}</td>
                                        <td>{<img className="img-news-list" alt="" src={item.image} />}</td>
                                        <td className="actions-table mission-manip">
                                            <button className="btnEdit">
                                                <Link to={"/EditRealisation/" + item.id} className="linkEdit" >
                                                    <i className="fas fa-edit"></i>
                                                </Link>
                                            </button>
                                            <i className="fas fa-trash" onClick={() => { this.deleteRealisation(item.id) }}></i>
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
