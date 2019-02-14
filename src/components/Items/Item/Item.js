import React from 'react';
import './Item.scss';

const Item = (props) => (
        <div className="item_box">
            <span className="favourite">
                <i className="far fa-star"></i>
                <i className="fas fa-star selected"></i>
            </span>
            <div className="content_image">
                <img src={props.image} alt={props.name} />
            </div>
            <h3>{props.name}</h3>
            <p>{props.tagline}</p>
        </div>
    );

export default Item;