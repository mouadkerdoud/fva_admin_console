import React, { Component } from 'react'
import { Link } from "react-router-dom"

const $ = require("jquery");
$.DataTable = require("datatables.net");


class News extends Component {

    state = {
        isLoading: true,
        news: []
    }
    async componentDidMount() {
        const url = "http://fva-backend-dev.herokuapp.com/api/app/news/"
        const response = await fetch(url)
        const data = await response.json()
        this.setState({ news: data.results, isLoading: false });
        console.log(this.state.news);
        $(function () {
            $('#example').DataTable({
                "pagingType": "full_numbers",
                "lengthMenu": [[5, 10, 20, -1], [5, 10, 25, "All"]]
            });


        });
    }

    deleteEvent(NewsId){
            const currentNews = this.state.news
            this.setState({
                news: currentNews.filter(news => news.id !== NewsId),
              });
            const url='http://fva-backend-dev.herokuapp.com/api/app/news/'+NewsId
             fetch(url, {
                method : "DELETE"
            })
    }

    render() {
        const { news, isLoading } = this.state;

        if (isLoading || !news) {
            return <div className="container">Loading ... </div>
        }
        else {
            return (
                <div className="container">

                    <h1>News</h1>
                    <Link to='/AddNews'><button className="add-new-button">Add New</button></Link>

                    <div className="meta-table">

                        <div className="main-menu">
                            <h2 className="active" style={{ width: '12rem' }}><i className="fa fa-newspaper-o"></i>News List</h2>
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
                            {news.map((item, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{item.id}</td>
                                        <td>{item.title}</td>
                                        <td>{item.content}</td>
                                        <td>{<img className="img-news-list" alt="" src={item.main_image} />}</td>
                                        <td>{<img className="img-news-list" alt="" src={item.thumbnail_image} />}</td>
                                        <td className="actions-table">
                                            <i className="fas fa-edit"></i>
                                            <i className="fas fa-trash" onClick={()=>{this.deleteEvent(item.id)}}></i>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </ table>
                </div>
            )
        }
    }

}

export default News
