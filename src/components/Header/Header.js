import React from 'react';
import './Header.scss';
import Nav from './Nav/Nav'

const Header = props => {
    return (
        <header>
            <Nav />
            <h1>The Beer Bank</h1>
            <span className="slogan">Find your favorite beer here</span>
            <input type="text" name="search_beer" placeholder="Search for beer name" />
        </header>
    );
}

export default Header;