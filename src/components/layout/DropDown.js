import React from 'react'
import { Link } from 'react-router-dom'
import "./DropDown.css"

const DropDown = (props) => {
    return (
        <div className="dropdown">
            <Link to={props.link}>{props.icon}{props.title}</Link>

        </div>
    )
}

export default DropDown
