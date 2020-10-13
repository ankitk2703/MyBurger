import React from 'react'
import "./Button.css"

const button = (props) => {
    const btnType = () => {
        switch (props.btnType) {
            case "Success": return "Success"
            case "Danger": return "Danger"
            default: return ""
        }
    }
    return <button
        className={"Button " + btnType()}
        onClick={props.clicked}>{props.children}</button>
}

export default button