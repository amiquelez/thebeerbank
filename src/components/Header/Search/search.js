import React from 'react';
import {ProductContext} from './../../../context/context';

const Search = () => {
    return (
        <ProductContext.Consumer>
            {context => (
            <input type="text" name="search_beer" placeholder="Search for beer name" onChange={context.searchHandler} />
            )}
        </ProductContext.Consumer>
    )
}

export default Search;