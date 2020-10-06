import React from 'react'

const burgerIngredient = (props) => {
        let ingredient = null

        switch(props.type)
        {
            case('bread-bottom'):
                ingredient = <div className="BreadBottom"></div>
                break;

            case('bread-top'):
                ingredient = (
                <div className="bread-top">
                    <div className="seed1"></div>
                    <div className="seed2"></div>
                </div>)
                break;   
            
            case ('meat'):
                ingredient = <div className="Meat"></div>
                break;
            
            case ('cheese'):
                ingredient = <div className="cheese"></div>
                break;
            
            case ('bacon'):
                ingredient = <div className="bacon"></div>
                break;
            
            case ('salad'):
                ingredient = <div className="salad"></div>
                break;
            
            default:
                ingredient = null
        }

        return ingredient
}