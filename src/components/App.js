import React, { Component } from 'react';
import SearchForm from './SearchForm'
import StockResults from './StockResults'


export default class App extends Component {
  render() {
    return (
      <div>
      <h1 className="text-center">Stock Tracker</h1>
      <SearchForm/>
      <StockResults/>
      </div>
    )
  }
}
