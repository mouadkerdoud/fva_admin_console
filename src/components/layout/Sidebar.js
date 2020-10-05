import React from 'react'
import SidebarItems from "./SidebarItems"
import DropDown from "./DropDown"

import "./Sidebar.css"


const Sidebar = () => {
    return (
        <div class="wrapper">
            <div class="sidebar">
                <h2>FVA Admin</h2>
                <ul>
             
                    <SidebarItems title="Home" icon={<i class="fas fa-home"></i>} link="home" />

                    <SidebarItems title="Ecommerce" icon={<i class="fas fa-shopping-cart"></i>} drop={<i class="fas fa-caret-down"></i>} >
                        
                        <DropDown title="Dashboard" icon={<i class="fas fa-chart-bar"></i>} link="dashboard" />
                        <DropDown title="Products" icon={<i class="fas fa-shopping-bag"></i>} link="products" />
                        <DropDown title="Categories" icon={<i class="fas fa-list-ul"></i>} link="categories" />

                    </SidebarItems>

                    <SidebarItems title="Blog" icon={<i class="fas fa-address-card"></i>} drop={<i class="fas fa-caret-down"></i>} />

                    <SidebarItems title="Messages" icon={<i class="fas fa-envelope"></i>} link="messages" />
                    <SidebarItems title="Support" icon={<i class="fas fa-question-circle"></i>} link="support" />
                    
                </ul> 
            </div>
            <div class="main_content">
                <div class="header">Future Vision Association Admin Console</div>  
            </div>
        </div>
    )
}

export default Sidebar

