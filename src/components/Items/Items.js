import React from 'react';
import Item from './Item/Item';
//import {ProductConsumer} from '../../context';

const items = (props) => props.items.map( (item, index) => {
    const fav = props.favourites.find(f => f === item.id);
    let result = null;
    if(!props.favouritePage || (props.favouritePage && fav) ){
        result = <Item key={item.id} {...props.items[index]} fav={fav} />
    }
    return result;
});

export default items;