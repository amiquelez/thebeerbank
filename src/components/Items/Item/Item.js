import React from 'react';
import './Item.scss';
import {ProductConsumer} from '../../../context';

const Item = (props) => {
    const {id, favourite, clickFavourite, image, name, tagline} = props;
    return (
        <ProductConsumer> 
            {val => (
                <div className="item_box">
                    <span className="favourite" onClick={clickFavourite}>
                        <i className={favourite ? "far fa-star" : "far fa-star selected"}></i>
                        <i className={favourite ? "fas fa-star selected" : "fas fa-star"}></i>
                    </span>
                    <div className="content_image" onClick={() => val.handleDetail(id)}>
                        <img src={image} alt={name} />
                    </div>
                    <h3 onClick={() => val.handleDetail(id)}>{name}</h3>
                    <p onClick={() => val.handleDetail(id)}>{tagline}</p>
                </div>
            )}
        </ProductConsumer> 
    )
};

export default Item;