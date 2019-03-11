import React, { useState, useEffect } from 'react';
import './Nav.scss';
import NavItem from './NavItem/NavItem';
import {ProductContext} from '../../../context/context';

const Nav = () => {
    
    const [state, setState] = useState({
        top: 10,
        scroll: 0
    })

    const handleScroll = () => {
        setState({ ...state, scroll: window.scrollY });
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, []);

    return (
        <ProductContext.Consumer>
            {context => (
            <nav className={state.scroll > state.top ? 'nav_fixed' : ''}> 
                <ul>
                    <NavItem link={context.homeHandler}>Home</NavItem>
                    <NavItem link={context.favouriteHandler}>Favourite</NavItem>
                </ul>
            </nav>
            )}
        </ProductContext.Consumer>
    )
}

export default Nav;