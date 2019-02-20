import React from 'react';
import Item from './Item/Item';

const items = (props) => props.items.map(item => {
    const fav = props.favourites.find(f => f === item.id);
    let result = null;
    if(!props.favouritePage || (props.favouritePage && fav) ){
        result = <Item key={item.id} name={item.name} image={item.image_url} tagline={item.tagline} clickFavourite={(e) => props.clickedFavourite(item.id)} favourite={fav} />
    }
    return result;
});

export default items;