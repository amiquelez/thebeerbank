import React from 'react';

const navItem = props => (
    <li onClick={props.link} className={props.active ? 'active' : ''}>{props.children}</li>
);

export default navItem;