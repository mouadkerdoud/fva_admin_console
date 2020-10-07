import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const SidebarItems = (props) => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <li>
                <Link to={props.link} onClick={()=>setOpen(!open)} >{props.icon}{props.title}       {props.drop}</Link>
                
                {open && props.children}

            </li>
        </>
    )
}

export default SidebarItems
