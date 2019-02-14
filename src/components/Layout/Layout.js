import React, {Component} from 'react';
import Header from '../Header/Header';
import Items from '../Items/Items';
import './Layout.scss';
import axios from 'axios';

class Layout extends Component{
    state = {
        items: []
    }

    componentDidMount(){
        axios.get('https://api.punkapi.com/v2/beers').then(
            response => {
                this.setState({items: response.data})
            }
        )
    }

    render(){
        return (
            <React.Fragment>
                <Header />
                <div className="content">
                    <div className="items_list">
                        <Items items={this.state.items} />
                    </div>
                </div>
            </React.Fragment>
        )
    };
}

export default Layout;