import React from 'react'
import BurgerIngredient from '../Burger/BurgerIngredient/BurgerIngredient'
import './Burger.css'

const burger = (props) => {

    let transformedIngredients = Object.keys(props.ingredient).map(igKey => {
        return [...Array(props.ingredient[igKey])].map((_, i) => {
           return <BurgerIngredient key={igKey + i} type={igKey} />
        })
    }).reduce((arr,el) => {
        return arr.concat(el)
    }, [])

    if(transformedIngredients.length === 0){
        transformedIngredients = <p>Please start adding ingredient!</p>
    }
    return(
        <div className="Burger">
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    )
}

export default burger