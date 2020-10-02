import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Sidebar from "./components/layout/Sidebar"
import Dashboard from "./components/dashboard/Dashboard"
import Products from "./components/products/Products"
import AddProduct from "./components/products/AddProduct"


import ManagePost from './components/blog/Post';
import AddPost from './components/blog/Post/create.js';
import ManageCategories from './components/blog/Categorie/index.js';
import AddCategorie from './components/blog/Categorie/create.js';
import ManageUsers from './components/blog/User/index.js';
import AddUser from './components/blog/User/create.js';


import Home from "./components/Home"


import './App.css';



function App() {
  return (

    <Router>
      <Sidebar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/products" component={Products} />
        <Route path="/AddProduct" component={AddProduct} />

        <Route exact path="/ManagePost" component={ManagePost} /> 
        <Route exact path="/AddPost" component={AddPost} /> 
        <Route exact path="/ManageCategories" component={ManageCategories} /> 
        <Route exact path="/AddCategorie" component={AddCategorie} /> 
        <Route exact path="/ManageUsers" component={ManageUsers} /> 
        <Route exact path="/AddUser" component={AddUser} /> 
      </Switch>
    </Router>
  );
}

export default App;
