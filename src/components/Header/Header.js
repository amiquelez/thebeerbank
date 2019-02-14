import React from 'react';
import './Header.scss';

const Header = props => {
    return (
        <header>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li>Favourite</li>
                </ul>
            </nav>
            <h1>The Beer Bank</h1>
            <span className="slogan">Find your favorite beer here</span>
            <input type="text" name="search_beer" placeholder="Search for beer name" />
        </header>
    );
}

export default Header;