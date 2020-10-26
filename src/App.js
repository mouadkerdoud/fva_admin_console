import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Sidebar from "./components/layout/Sidebar"
import Dashboard from "./components/ecommerce/dashboard/Dashboard"


import Products from "./components/ecommerce/products/Products"
import AddProduct from "./components/ecommerce/products/AddProduct"
import CategoriesProducts from "./components/ecommerce/categories_products/CategoriesProducts"
import AddCategoryProduct from "./components/ecommerce/categories_products/AddCategoryProduct"
import EditCategory from "./components/ecommerce/categories_products/EditCategory"

import DashBlog from "./components/blog/dashboard-blog/DashBlog"
import Post from "./components/blog/Posts/Post"
import AddPost from "./components/blog/Posts/AddPost"
import CategoryPost from "./components/blog/categories_posts/CategoryPost"
import AddCategoryPost from "./components/blog/categories_posts/AddCategoryPost"

import Association from "./components/association_profile/Settings/Association"
import User from "./components/User/User"
import AddUser from "./components/User/AddUser"
import Event from "./components/association_profile/Event/Event"
import AddEvent from './components/association_profile/Event/AddEvent';
import EditEvent from './components/association_profile/Event/EditEvent';
import News from "./components/association_profile/News/News"
import AddNews from "./components/association_profile/News/AddNews"
import EditNews from './components/association_profile/News/EditNews';
import Mission from './components/association_profile/Mission/Mission';
import AddMission from './components/association_profile/Mission/AddMission';
import EditMission from './components/association_profile/Mission/EditMission';
import Realisation from './components/association_profile/Realisation/Realisation';
import AddRealisation from './components/association_profile/Realisation/AddRealisation';
import EditRealisation from './components/association_profile/Realisation/EditRealisation';


import Home from "./components/Home"


import './App.css';
import Profile from './components/User/Profile';


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
        <Route path="/EditCategory/:id"
            render={props=>(
              <EditCategory {...props} />
            )}
            >
          </Route>
        <Route path="/post" component={Post} />
        <Route path="/categoriesPost" component={CategoryPost} />
        <Route path="/AddPost" component={AddPost} />
        <Route path="/AddCategoryPost" component={AddCategoryPost} />
        <Route path="/User" component={User} />
        <Route path="/AddUser" component={AddUser} />
        <Route path="/Profile" component={Profile} />
        <Route path="/dashblog" component={DashBlog} />
        <Route path="/Event" component={Event} />
        <Route path="/AddEvent" component={AddEvent} />
        <Route path="/EditEvent/:id"
            render={props=>(
              <EditEvent {...props} />
            )}
            >
<<<<<<< HEAD
        </Route>
=======
          </Route>
          
>>>>>>> 5ae154cfe4a636a83a45a267b27601bf7d86fccc
        <Route path="/News" component={News} />
        <Route path="/AddNews" component={AddNews} />
        <Route path="/EditNews/:id"
            render={props=>(
              <EditNews {...props} />
            )}
            >
        </Route>      
        <Route path="/Mission" component={Mission} />
        <Route path="/AddMission" component={AddMission} />
        <Route path="/EditMission/:id"
            render={props=>(
              <EditMission {...props} />
            )}
            >
        </Route>  
        <Route path="/Realisation" component={Realisation} />
        <Route path="/AddRealisation" component={AddRealisation} />
        <Route path="/EditRealisation/:id"
            render={props=>(
              <EditRealisation {...props} />
            )}
            >
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
