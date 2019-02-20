import React, {Component} from 'react';
import Header from '../Header/Header';
import Items from '../Items/Items';
import './Layout.scss';
import axios from 'axios';
import Modal from '../UI/Modal/Modal';

class Layout extends Component{
    state = {
        perPage: 12,
        page: 1,
        totalPages: 10,
        scrolling: false,
        items: [],
        favourites: [],
        favouritePage: false
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
		const url = `https://api.punkapi.com/v2/beers?page=${page}&per_page=${perPage}`;
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
    
    addToFavouriteHandler = (id, e) => {
        this.setState({
            favourites: [...this.state.favourites, id]
        })
    }

    favouriteHandler = () => {
        this.setState({
            favouritePage: true
        })
    }

    homeHandler = () => {
        this.setState({
            favouritePage: false
        })
    }

    render(){
        return (
            <React.Fragment>
                <Modal />
                <Header favouriteClicked={this.favouriteHandler} homeClicked={this.homeHandler} />
                <div className="content">
                    <div className="items_list">
                        <Items items={this.state.items} clicked={this.addToFavouriteHandler} favourites={this.state.favourites} favouritePage={this.state.favouritePage} />
                    </div>
                </div>
            </React.Fragment>
        )
    };
}

export default Layout;