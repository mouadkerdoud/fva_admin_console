import React, { Component } from 'react'
import { Link } from "react-router-dom"

const $ = require("jquery");
$.DataTable = require("datatables.net");


class Mission extends Component {

    state = {
        isLoading: true,
        missions: []
    }
    async componentDidMount() {
        const url = "http://fva-backend-dev.herokuapp.com/api/app/mission/"
        const response = await fetch(url)
        const data = await response.json()
        this.setState({ missions: data.results, isLoading: false });
        $(function () {
            $('#example').DataTable({
                "pagingType": "full_numbers",
                "lengthMenu": [[5, 10, 20, -1], [5, 10, 25, "All"]]
            });
        });

    }

    deleteMission(MissionID) {
        const currentMission = this.state.missions
        this.setState({
            missions: currentMission.filter(mission => mission.id !== MissionID),
        });
        const url = 'http://fva-backend-dev.herokuapp.com/api/app/mission/' + MissionID
        fetch(url, {
            method: "DELETE"
        })
    }
    
    render() {
        const { missions, isLoading } = this.state;

        if (isLoading || !missions) {
            return <div className="container">Loading ... </div>
        }
        else {
            return (
                <div className="container">

                    <h1>Missions</h1>
                    <Link to='/AddMission'><button className="add-new-button">Add New</button></Link>

                    <div className="meta-table">

                        <div className="main-menu">
                            <h2 className="active" style={{ width: '13rem' }}><i className="fa fa fa-black-tie"></i>Missions List</h2>
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
                            {missions.map((item, i) => (
                                <tr key={i}>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.content}</td>
                                    <td>{<img className="img-mission-list" alt="" src={item.avatar} />}</td>

                                    <td className="actions-table mission-manip">
                                        <button className="btnEdit">
                                            <Link to={"/EditMission/" + item.id} className="linkEdit" >
                                                <i className="fas fa-edit"></i>
                                            </Link>
                                        </button>
                                        <i className="fas fa-trash" onClick={() => { this.deleteMission(item.id) }}></i>
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
