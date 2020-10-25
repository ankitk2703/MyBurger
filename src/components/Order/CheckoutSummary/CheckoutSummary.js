import React from 'react'
import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'
import "./CheckoutSummary.css"


const CheckoutSummary = (props) => {
    return (
        <div className="CheckSummary">
            <h1>We hope it tastes well!</h1>
            <div style={{ width: '300px', height: '300px', margin: 'auto' }}>
                <Burger ingredient={props.ingredient} />
            </div>
            <Button btnType="Danger" clicked={props.checkoutCancelled}>Cancel</Button>
            <Button btnType="Success" clicked={props.checkoutContinued}>Continue</Button>
        </div>
    )
}

export default CheckoutSummary