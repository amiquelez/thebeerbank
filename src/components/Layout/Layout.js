import React, {Component} from 'react';
import Header from '../Header/Header';
import Items from '../Items/Items';
import './Layout.scss';
import Modal from '../UI/Modal/Modal';
import ItemView from '../Items/ItemView/ItemView';
import {ProductConsumer} from '../../context';

class Layout extends Component{

    render(){
        return (
            <ProductConsumer>
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
            </ProductConsumer>
        )
    };
}

export default Layout;