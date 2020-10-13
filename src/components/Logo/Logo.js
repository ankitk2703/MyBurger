import React from 'react'
import BurgerLogo from '../../assests/images/burger-logo.png'
import './Logo.css'

const logo = (props) => (

    <div className="Logo" style={{height:props.height}}>
        <img src={BurgerLogo} alt="MyBurger"></img>
    </div>

)

export default logo