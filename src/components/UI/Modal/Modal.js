import React from 'react'
import Aux from '../../../hoc/Auxillary'
import Backdrop from '../Backdrop/BackDrop'
import './Modal.css'

const modal = (props) => (
    <Aux>
        <Backdrop show={props.show} clicked={props.modalClosed}/>
        <div className="Modal"
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
            {props.children}
        </div>
    </Aux>
    
)

export default modal