import React, {Component} from 'react';
import './Nav.scss';
import NavItem from './NavItem/NavItem';
import {ProductContext} from '../../../context/context';

class Nav extends Component {

    constructor(){
        super();
        this.handleScroll = this.handleScroll.bind(this);
    }    
    state = {
        top: 10
    }

    handleScroll() {
        this.setState({scroll: window.scrollY});
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    }

    render(){
        return (
            <ProductContext.Consumer>
                {context => (
                <nav className={this.state.scroll > this.state.top ? 'nav_fixed' : ''}> 
                    <ul>
                        <NavItem link={context.homeHandler}>Home</NavItem>
                        <NavItem link={context.favouriteHandler}>Favourite</NavItem>
                    </ul>
                </nav>
                )}
            </ProductContext.Consumer>
        )
    }
}

export default Nav;