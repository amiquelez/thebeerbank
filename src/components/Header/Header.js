import React from 'react';
import './Header.scss';
import Nav from './Nav/Nav';
import Search from './Search/search';

const Header = props => {
    return (
        <header>
            <Nav />
            <h1>The Beer Bank</h1>
            <span className="slogan">Find your favorite beer here</span>
            <Search />
        </header>
    );
}

export default Header;