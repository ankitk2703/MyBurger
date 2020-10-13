import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import './SideDrawer.css'
import Aux from '../../../hoc/Auxillary'
import BackDrop from '../../UI/Backdrop/BackDrop'


const sideDrawer = (props) => {
    let attachedClasses = ["SideDrawer", "Close"]
    if(props.open)
    {
        attachedClasses = ["SideDrawer", "Open"]
    }
    return (
        <Aux>
            <BackDrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <Logo height="11%" />
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
      
    );
};

export default sideDrawer;