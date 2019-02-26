import React from 'react';
import './Modal.scss';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => (
    <React.Fragment>
        <Backdrop show={props.show} />
        <div className={props.show ? 'modal showModal' : 'modal hideModal'}>
            {props.children}
        </div>
    </React.Fragment>
)

export default modal;