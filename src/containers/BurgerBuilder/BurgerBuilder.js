import React, { Component } from 'react'
import Aux from '../../hoc/Auxillary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'


const INGREDIENT_PRICES = {
    salad: 10,
    cheese: 15,
    meat: 30,
    bacon: 40
}


class BurgerBuilder extends Component {

    state = {
        ingredient: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 20,
        purchasable: false,
        purchasing: false
    }

    updatePurchasableState(ingredient) {

        const sum = Object.keys(ingredient).map(igKey => {
            return ingredient[igKey]
        }).reduce((sum, el) => {
            return sum + el
        }, 0)
        this.setState({ purchasable: sum > 0 })
    }

    addIngredientHandler = (type) => {

        const oldCount = this.state.ingredient[type]
        const updatedCount = oldCount + 1
        const updatedIngredient = {
            ...this.state.ingredient
        }
        updatedIngredient[type] = updatedCount
        const priceAddition = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice + priceAddition
        this.setState({ totalPrice: newPrice, ingredient: updatedIngredient })
        this.updatePurchasableState(updatedIngredient)

    }
    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredient[type]
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1
        const updatedIngredient = {
            ...this.state.ingredient
        }
        updatedIngredient[type] = updatedCount
        const priceDeduction = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice - priceDeduction
        this.setState({ totalPrice: newPrice, ingredient: updatedIngredient })
        this.updatePurchasableState(updatedIngredient)
    }

    purchasingHandler = () => {
        this.setState({ purchasing: true })
    }
    purchaseCancelModal = () => {
        this.setState({ purchasing: false })
    }
    purchaseContinueHandler = () => {
        alert('You can continue')
    }
    render() {
        const disabledInfo = {
            ...this.state.ingredient
        }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelModal}>
                    <OrderSummary
                        ingredient={this.state.ingredient}
                        price={this.state.totalPrice}
                        purchaseCancelled={this.purchaseCancelModal}
                        purchaseContinued={this.purchaseContinueHandler} />
                </Modal>
                <Burger ingredient={this.state.ingredient} />
                <BuildControls
                    ingredientRemoved={this.removeIngredientHandler}
                    ingredientAdded={this.addIngredientHandler}
                    disabled={disabledInfo}
                    purchasable={this.state.purchasable}
                    price={this.state.totalPrice}
                    ordered={this.purchasingHandler} />
            </Aux>
        )
    }
}

export default BurgerBuilder