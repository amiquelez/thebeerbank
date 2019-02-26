import React, {Component} from 'react';
import Header from '../Header/Header';
import Items from '../Items/Items';
import './Layout.scss';
import Modal from '../UI/Modal/Modal';
import ItemView from '../Items/ItemView/ItemView';
import {ProductConsumer} from '../../context';

class Layout extends Component{
   
    /*showProductHandler = (id) => {
        const prod = this.state.items.find(e => e.id === id)
        this.setState({ showModal: true, product: prod })
    }*/

    render(){
        return (
            <ProductConsumer>
                {val => (
                <Modal show={val.showModal}><ItemView product={val.product} items={val.items} /></Modal>
                <Header favouriteClicked={val.favouriteHandler} homeClicked={val.homeHandler} />
                <div className="content">
                    <div className="items_list">
                        <Items items={val.items} clickedFavourite={val.addRemoveToFavouriteHandler} favourites={val.favourites} favouritePage={val.favouritePage} />
                    </div>
                </div>
                )}
            </ProductConsumer>
        )
    };
}

export default Layout;