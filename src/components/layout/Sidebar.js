import React from 'react'
import { Link } from 'react-router-dom'
import "./Sidebar.css"


const Sidebar = () => {
    return (
        <div class="wrapper">
            <div class="sidebar">
                <h2>FVA Admin</h2>
                <ul>
                    <li><Link to="/home" ><i class="fas fa-home"></i>Home</Link></li>
                    <li><Link href="#"><i class="fas fa-shopping-cart"></i>Ecommerce</Link></li>
                    <li><Link href="#"><i class="fas fa-address-card"></i>Blog</Link></li>
                    <li><Link href="#"><i class="fas fa-envelope"></i>Messages</Link></li>
                    <li><Link href="#"><i class="fas fa-question-circle"></i>Support</Link></li>
                </ul> 
            </div>
            <div class="main_content">
                <div class="header">Future Vision Association Admin Console</div>  
            </div>
        </div>
    )
}

export default Sidebar
