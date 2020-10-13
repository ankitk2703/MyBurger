import React from 'react'
import './DrawerToggler.css'

const DrawerToggle = (props) => {
    return (
        <div className="DrawerToggle" onClick={props.clicked}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default DrawerToggle