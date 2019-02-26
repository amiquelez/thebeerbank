import React from 'react';
import './ItemView.scss';
import {ProductConsumer} from '../../../context';

const itemView = (props) => (
    <ProductConsumer>
        {val => {
            const {name} = val.product;
            return (
                <div className="item_view">
                    <div className="content_image">
                        <img src="https://images.punkapi.com/v2/4.png" alt="Beer" />
                    </div>
                    <div className="summary">
                        <h3>{name}</h3>
                        <p className="slogan">You know you shouldnt</p>
                        <hr />
                        <ul className="details">
                            <li><span>IBU:</span> 41.5%</li>
                            <li><span>ABV:</span> 4.1%</li>
                            <li><span>EBC:</span> 15%</li>
                        </ul>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                </div>
            )
        }}
    </ProductConsumer>
)

export default itemView;