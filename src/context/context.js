import React, { Component } from 'react';
import axios from 'axios';

export const ProductContext = React.createContext();

export default class CentralStore extends Component {
    state = {
        perPage: 12,
        page: 1,
        totalPages: 10,
        scrolling: false,
        items: [],
        favourites: [],
        favouritePage: false,
        showModal: false,
        product: [],
        search: ''
    }

    componentDidMount(){
        this.loadItems()
        this.scrollListener = window.addEventListener('scroll', e => {
			this.handleScroll(e)
		})
    }

	handleScroll = e => {
		const { scrolling, totalPages, page } = this.state
		if (scrolling) return
		if (totalPages <= page) return
		const lastItem = document.querySelector('div.item_box:last-child')
		const lastItemOffset = lastItem.offsetTop + lastItem.clientHeight
		const pageOffset = window.pageYOffset + window.innerHeight
		var bottomOffset = 20
		if (pageOffset > lastItemOffset - bottomOffset) this.loadMore()
    }

	loadItems = () => {
        const {perPage, page, items} = this.state
        const searchTxt = this.state.search ? `&beer_name='${this.state.search}'` : '';  
		const url = `https://api.punkapi.com/v2/beers?page=${page}&per_page=${perPage}${searchTxt}`;
        axios.get(url).then( response => this.setState({
            items: [...items, ...response.data],
            scrolling: false
        }))
	}

	loadMore = () => {
		this.setState(prevState => ({
			page: prevState.page + 1,
			scrolling: true
		}), this.loadItems)
    }
    
    addRemoveToFavouriteHandler = (id) => {
        const exists = this.state.favourites.find(e => e === id);
        let newFavourites;
        if(!exists){
            newFavourites = this.state.favourites.concat(id);
        }else{
            newFavourites = this.state.favourites.filter(e => e !== id)
        }

        this.setState({favourites: newFavourites})
    }

    favouriteHandler = () => {
        this.setState({favouritePage: true})
    }

    homeHandler = () => {
        this.setState({favouritePage: false})
    }

    getItem = id => {
        const product = this.state.items.find(item => item.id === id);
        return product;
    }

    detailHandler = id => {
        const product = this.getItem(id);
        this.setState({ product: product, showModal: true });
    }

    detailCloseHandler = () => {
        this.setState({showModal: false});
    }

    searchHandler = (e) => {
        const query = e.target.value.trim().replace(/ /g, '_');
        this.setState({search: query});
        this.loadItems();
    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                detailHandler: this.detailHandler,
                detailCloseHandler: this.detailCloseHandler,
                addRemoveToFavouriteHandler: this.addRemoveToFavouriteHandler,
                favouriteHandler: this.favouriteHandler,
                homeHandler: this.homeHandler,
                searchHandler: this.searchHandler
                }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}