import React from 'react';
import Item from './Item/Item';

const items = (props) => props.items.map(item => {
    const fav = props.favourites.find(f => f === item.id);
    let result;
    if(!props.favouritePage){
        result = <Item key={item.id} name={item.name} image={item.image_url} tagline={item.tagline} click={(e) => props.clicked(item.id, e)} favourite={fav} />
    }
    fav ? (result = `<Item key={item.id} name={item.name} image={item.image_url} tagline={item.tagline} click={(e) => props.clicked(item.id, e)} favourite={fav} />`) : null ;
    return result;
});

export default items;