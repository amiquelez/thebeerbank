import React from 'react';
import './Item.scss';
import {ProductContext} from '../../../context/context';

const Item = (props) => {
    const {id, fav, image_url, name, tagline} = props;
    return (
        <ProductContext.Consumer> 
            {context => (
                <div className="item_box">
                    <span className="favourite" onClick={() => context.addRemoveToFavouriteHandler(id)}>
                        <i className={fav ? "far fa-star" : "far fa-star selected"}></i>
                        <i className={fav ? "fas fa-star selected" : "fas fa-star"}></i>
                    </span>
                    <div className="content_image" onClick={() => context.detailHandler(id)}>
                        <img src={image_url} alt={name} />
                    </div>
                    <h3 onClick={() => context.detailHandler(id)}>{name}</h3>
                    <p onClick={() => context.detailHandler(id)}>{tagline}</p>
                </div>
            )}
        </ProductContext.Consumer> 
    )
};

export default Item;