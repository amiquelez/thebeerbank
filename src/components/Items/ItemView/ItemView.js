import React from 'react';
import './ItemView.scss';
import {ProductContext} from '../../../context/context';

const itemView = (props) => (
    <ProductContext.Consumer>
        {context => {
            const {name, tagline, description, image_url, abv, ebc, ibu} = context.product;
            return (
                <div className="item_view">
                    <div className="content_image">
                        <img src={image_url} alt="Beer" />
                    </div>
                    <div className="summary">
                        <h3>{name}</h3>
                        <p className="slogan">{tagline}</p>
                        <hr />
                        <ul className="details">
                            {ibu ? <li><span>IBU:</span> {ibu}%</li> : null}
                            {abv ? <li><span>ABV:</span> {abv}%</li> : null}
                            {ebc ? <li><span>EBC:</span> {ebc}%</li> : null}
                        </ul>
                        <p>{description}</p>
                    </div>
                </div>
            )
        }}
    </ProductContext.Consumer>
)

export default itemView;