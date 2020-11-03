import React, { Component } from 'react'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import { Route } from 'react-router-dom'
import ContactData from '../CheckOut/ContactData/ContactData'

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
  
    render() {

        return (
            <div>
                <CheckoutSummary
                    checkoutCancelled={this.checkoutCancelHandler}
                    checkoutContinued={this.checkoutContinueHandler}
                    ingredient={this.state.ingredient} />
                <Route
                    path={this.props.match.path + '/contact-data'}
                    render={() => (<ContactData ingredient={this.state.ingredient} />)} ></Route>
            </div>
        )
    }
}

export default Checkout