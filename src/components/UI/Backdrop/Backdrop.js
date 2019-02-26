import React from 'react';
import './Backdrop.scss';
import {ProductConsumer} from '../../../context';

const backdrop = (props) => (
    <ProductConsumer> 
    {context => props.show ? <div className="backdrop" onClick={context.detailCloseHandler}></div> : null }  
    </ProductConsumer> 
);

export default backdrop;