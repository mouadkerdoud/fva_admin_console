import React from 'react'
import SidebarItems from "./SidebarItems"
import DropDown from "./DropDown"

import "./Sidebar.css"


const Sidebar = () => {
    return (
        <div className="wrapper">
            <div className="sidebar">
                <h2 className="stroke">FVA Admin</h2>
                <ul>

                <SidebarItems title="Home" icon={<i className="fas fa-home"></i>} link="home" />


                    <SidebarItems title="Association" icon={ <i className="fas fa-id-badge"></i>} drop={<i className="fas fa-caret-down"></i>} >                        
                        <DropDown title=" Event" icon={<i className="fa fa-calendar"></i>} link="Event" />
                        <DropDown title=" News" icon={<i className="fa fa-newspaper-o"></i>} link="News" />
                        <DropDown title=" Missions" icon={<i className="fa fa-black-tie"></i>} link="Mission" />
                        <DropDown title="Users" icon={<i className="fas fa-users"></i>} link="User" />
                        <DropDown title="Settings" icon={<i className="fas fa-cog"></i>} link="association" />

                    </SidebarItems>


                    <SidebarItems title="Ecommerce" icon={<i className="fas fa-shopping-cart"></i>} drop={<i className="fas fa-caret-down"></i>} >
                        
                        <DropDown title="Dashboard" icon={<i className="fas fa-chart-bar"></i>} link="dashboard" />
                        <DropDown title="Products" icon={<i className="fas fa-shopping-bag"></i>} link="products" />
                        <DropDown title="Categories" icon={<i className="fas fa-list-ul"></i>} link="CategoriesProducts" />

                    </SidebarItems>

                    <SidebarItems title="Blog" icon={<i className="fas fa-address-card"></i>} drop={<i className="fas fa-caret-down"></i>}>
                        <DropDown title="Dashboard Blog" icon={<i class="fas fa-chart-bar"></i>} link="dashblog" />
                        <DropDown title="Posts" icon={<i className="fas fa-clipboard"></i>} link="post" />
                        <DropDown title="Post Categories" icon={<i class="fas fa-list-ul"></i>} link="categoriesPost" />
                    </SidebarItems>

                    <SidebarItems title="Messages" icon={<i className="fas fa-envelope"></i>} link="messages" />
                    <SidebarItems title="Support" icon={<i className="fas fa-question-circle"></i>} link="support" />
                    
                </ul> 
            </div>
            <div className="main_content">
                <div className="header text">Future Vision Association Admin Console</div>  
            </div>
        </div>
    )
}

export default Sidebar


