import React from 'react';
import './Item.scss';
import {ProductConsumer} from '../../../context';

const Item = (props) => {
    const {id, favourite, image, name, tagline} = props;
    return (
        <ProductConsumer> 
            {context => (
                <div className="item_box">
                    <span className="favourite" onClick={() => context.addRemoveToFavouriteHandler(id)}>
                        <i className={favourite ? "far fa-star" : "far fa-star selected"}></i>
                        <i className={favourite ? "fas fa-star selected" : "fas fa-star"}></i>
                    </span>
                    <div className="content_image" onClick={() => context.detailHandler(id)}>
                        <img src={image} alt={name} />
                    </div>
                    <h3 onClick={() => context.detailHandler(id)}>{name}</h3>
                    <p onClick={() => context.detailHandler(id)}>{tagline}</p>
                </div>
            )}
        </ProductConsumer> 
    )
};

export default Item;