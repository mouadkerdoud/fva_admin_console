import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const SidebarItems = (props) => {
    const [open, setOpen] = useState(false)
    const {link, icon, title, drop} = props
    
    const handleClick = (e)=>{
        e.preventDefault()
        setOpen(!open)
    }

        return (
            <>
                <li>

                    {
                        link ? <Link to={link} onClick={()=>setOpen(!open)} >{icon}{title}       {drop}</Link>
                            : <Link to="/" onClick={(e)=>handleClick(e)} >{icon}{title}       {drop}</Link>
                    }
                     
                    
                    {open && props.children}
    
                </li>
            </>
        )
 
    
}

export default SidebarItems
