import { render } from 'enzyme'
import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button'
import Input from '../../../components/UI/Input/Input'
import './ContactData.css'
import axios from '../../../axios-order'


class ContactData extends Component {
    state = {
        orderForm: {
            name:{
                elementType:'input',
                elementConfig: {
                    type:'text',
                    placeholder:'Enter your name'
                },
                value:''
            },
            pincode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'ZIP Code'
                },
                value: ''
            },
            address: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Enter your address'
                },
                value: ''
            },
            Email:{
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Enter your email'
                },
                value: ''
            }
        },
        loading: false       
}

orderHandler = (event) => {
    event.preventDefault()
    this.setState({ loading: true })
    const formData = {}
    for(let formDataElement in this.state.orderForm)
    {
        formData[formDataElement] = this.state.orderForm[formDataElement].value
    }

    const order = {
        Ingredient: this.props.ingredient,
        totalPrice: this.state.totalPrice,
        orderData: formData

    }
    axios.post('/orders.json', order)
        .then(response => { this.setState({ loading: false, purchasing: false }) })
        .catch(error => { this.setState({ loading: false, purchasing: false }) })
}
    inputChangeHandler = (event, inputidentifier) => {
        const updatedOrderForm = {
            ...this.state.orderForm
        }
        const updatedFormElement = {
            ...updatedOrderForm[inputidentifier]
        }
        updatedFormElement.value = event.target.value
        updatedOrderForm[inputidentifier] = updatedFormElement
        this.setState({orderForm: updatedOrderForm})
    }

render(){
    let formElementArray = []
    for(let key in this.state.orderForm)
    {
        formElementArray.push({
            id:key,
            config:this.state.orderForm[key]
        })
    }
    return (
        <div className="ContactData">
            <h4>Enter your Contact Details</h4>
            <form>
                
                {formElementArray.map(formElement => (
                    <Input key={formElement.id} 
                        elementType={formElement.config.elementType} 
                        elementConfig={formElement.config.elementConfig} 
                        value={formElement.config.value} changed={(event) => this.inputChangeHandler(event,formElement.id)}></Input>

                ))}
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        </div>
    )
}
}

export default ContactData