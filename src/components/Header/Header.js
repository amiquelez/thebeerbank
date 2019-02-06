import React from 'react';
import './Header.scss';

const Header = props => {
    return (
        <header>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Favourite</li>
                </ul>
            </nav>
            <h1>The Beer Bank</h1>
            <span>Find your favorite beer here</span>
        </header>
    );
}

export default Header;