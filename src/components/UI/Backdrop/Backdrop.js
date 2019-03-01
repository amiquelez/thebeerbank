import React from 'react';
import './Backdrop.scss';
import {ProductContext} from '../../../context/context';

const backdrop = (props) => (
    <ProductContext.Consumer> 
    {context => props.show ? <div className="backdrop" onClick={context.detailCloseHandler}></div> : null }  
    </ProductContext.Consumer> 
);

export default backdrop;