import React from 'react'
import logo from '../../assets/img/logos.png'
import './styles.css'
import Button from '../Button'
function Menu(){
    return(
    <nav className="Menu">
        <a href="/">
            <img  className="Logo" src={logo} alt="Natflix logo"></img>
        </a>

        <Button as="a" href="/">
           Novo video
        </Button>

    </nav>
    )
}
export default Menu