import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Sidebar from "./components/layout/Sidebar"
import Dashboard from "./components/ecommerce/dashboard/Dashboard"


import Products from "./components/ecommerce/products/Products"
import AddProduct from "./components/ecommerce/products/AddProduct"
import CategoriesProducts from "./components/ecommerce/categories_products/CategoriesProducts"
import AddCategoryProduct from "./components/ecommerce/categories_products/AddCategoryProduct"

import DashBlog from "./components/blog/dashboard-blog/DashBlog"
import Post from "./components/blog/Posts/Post"
import AddPost from "./components/blog/Posts/AddPost"
import CategoryPost from "./components/blog/categories_posts/CategoryPost"
import AddCategoryPost from "./components/blog/categories_posts/AddCategoryPost"

import Association from "./components/association_profile/Settings/Association"
import User from "./components/association_profile/User/User"
import AddUser from "./components/association_profile/User/AddUser"
import Event from "./components/association_profile/Event/Event"
import AddEvent from './components/association_profile/Event/AddEvent';
import News from "./components/association_profile/News/News"
import AddNews from "./components/association_profile/News/AddNews"
import Mission from './components/association_profile/Mission/Mission';
import AddMission from './components/association_profile/Mission/AddMission';
import Realisation from './components/association_profile/Realisation/Realisation';
import AddRealisation from './components/association_profile/Realisation/AddRealisation';


import Home from "./components/Home"


import './App.css';


function App() {
  return (

    <Router>
      <Sidebar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/association" component={Association} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/products" component={Products} />
        <Route path="/AddProduct" component={AddProduct} />
        <Route path="/CategoriesProducts" component={CategoriesProducts} />
        <Route path="/AddCategoryProduct" component={AddCategoryProduct} />
        <Route path="/post" component={Post} />
        <Route path="/categoriesPost" component={CategoryPost} />
        <Route path="/AddPost" component={AddPost} />
        <Route path="/AddCategoryPost" component={AddCategoryPost} />
        <Route path="/User" component={User} />
        <Route path="/AddUser" component={AddUser} />
        <Route path="/dashblog" component={DashBlog} />
        <Route path="/Event" component={Event} />
        <Route path="/AddEvent" component={AddEvent} />
        <Route path="/News" component={News} />
        <Route path="/AddNews" component={AddNews} />
        <Route path="/Mission" component={Mission} />
        <Route path="/AddMission" component={AddMission} />
        <Route path="/Realisation" component={Realisation} />
        <Route path="/AddRealisation" component={AddRealisation} />

      </Switch>
    </Router>
  );
}

export default App;
