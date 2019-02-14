import React from 'react';
import Item from './Item/Item';

const items = (props) => props.items.map(item => {
    return <Item key={item.id} name={item.name} image={item.image_url} tagline={item.tagline} />
});

export default items;