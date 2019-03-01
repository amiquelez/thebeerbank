import React, {Component} from 'react';
import Header from '../Header/Header';
import Items from '../Items/Items';
import './Layout.scss';
import Modal from '../UI/Modal/Modal';
import ItemView from '../Items/ItemView/ItemView';
import {ProductContext} from '../../context/context';

class Layout extends Component{

    render(){
        return (
            <ProductContext.Consumer>
                {val => (
                <React.Fragment>
                    <Modal show={val.showModal}><ItemView product={val.product} items={val.items} /></Modal>
                    <Header />
                    <div className="content">
                        <div className="items_list">
                            <Items items={val.items} favourites={val.favourites} favouritePage={val.favouritePage} />
                        </div>
                    </div>
                </React.Fragment>
                )}
            </ProductContext.Consumer>
        )
    };
}

export default Layout;