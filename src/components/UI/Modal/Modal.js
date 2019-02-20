import React from 'react';
import './Modal.scss';

const modal = (props) => (
    <div className={props.show ? 'modal showModal' : 'modal hideModal'}>
        {props.children}
    </div>
)

export default modal;