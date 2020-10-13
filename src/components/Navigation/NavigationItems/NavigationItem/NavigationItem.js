import React from 'react';

import './NavigationItem.css';

const navigationItem = (props) => {
    const isActive = () => {
        if(props.active) return "active"
        return ""
    }
    return <li className="NavigationItem">
        <a
            href={props.link}
            className={isActive()}>{props.children}</a>
    </li>
}

export default navigationItem;