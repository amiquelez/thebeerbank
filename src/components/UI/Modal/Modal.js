import React from 'react';
import './Modal.scss';

const modal = (props) => (
    <div className="modal">
        {props.children}
    </div>
)

export default modal;