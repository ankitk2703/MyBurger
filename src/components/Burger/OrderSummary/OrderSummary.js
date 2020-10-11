import React from 'react'
import Aux from '../../../hoc/Auxillary'

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredient).map(igkey => {
        return <li key={igkey}><span style={{textTransform:'capitalize'}}>{igkey}: </span>{props.ingredient[igkey]}</li>
    })

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to checkout ?</p>
        </Aux>
    )
}

export default orderSummary