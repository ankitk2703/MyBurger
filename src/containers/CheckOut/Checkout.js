import React, {Component} from 'react'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'

class Checkout extends Component {
    state = {
        ingredient: {
            salad: 1,
            bacon: 1,
            cheese: 1,
            meat: 1
        }
    }

    checkoutCancelHandler = () => {
        this.props.history.goBack()
    }
    checkoutContinueHandler = () => {
        this.props.history.replace('./checkout/contact-data')
    }

    render(){

        return(
            <div>
                <CheckoutSummary 
                    checkoutCancelled={this.checkoutCancelHandler}
                    checkoutContinued={this.checkoutContinueHandler}
                ingredient={this.state.ingredient}/>
            </div>
        )
    }
}

export default Checkout