import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Style from "./index.module.css"
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  return (
    <div className={Style.Header}>
        <div className={Style.Navbar}>
            <div className={Style.SolNavbar}>
                <img src="https://preview.colorlib.com/theme/bizpro/images/logo/logo.png" alt="" />
            </div>
            <div className={Style.SagNavbar}>
               <Link to="/"><Button style={{color:"white"}}>Home</Button></Link>
               <Link to="/addelement"><Button style={{color:"white"}}>Add element</Button></Link>
                <Button style={{color:"white"}}>About</Button>
                <Button style={{color:"white"}}>Portfolio</Button>
                <Button style={{color:"white"}}>Team</Button>
                <Button style={{color:"white"}}>Skill</Button>
                <Button style={{color:"white"}}>Clients</Button>
                <Button style={{color:"white"}}>Pricink</Button>
                <Button style={{color:"white"}}>Blog</Button>
                <Button style={{color:"white"}}>Contact</Button>
            </div>
            <div className={Style.icons}>
            <MenuIcon/>
            </div>
        </div>
    </div>
    // <ul>
    //    
    //     <Link to="/addelement">Add element</Link>
    // </ul>
  )
}

export default Navbar