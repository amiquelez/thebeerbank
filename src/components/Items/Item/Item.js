import React from 'react';
import './Item.scss';

const Item = (props) => (
        <div className="item_box">
            <span className="favourite" onClick={props.clickFavourite}>
                <i className={props.favourite ? "far fa-star" : "far fa-star selected"}></i>
                <i className={props.favourite ? "fas fa-star selected" : "fas fa-star"}></i>
            </span>
            <div className="content_image">
                <img src={props.image} alt={props.name} />
            </div>
            <h3>{props.name}</h3>
            <p>{props.tagline}</p>
        </div>
    );

export default Item;