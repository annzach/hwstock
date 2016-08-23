import React, { Component } from 'react'
import SearchActions from '../actions/SearchActions'
import StockList from './StockList'
import SearchStore from '../stores/SearchStore'
import uuid from 'uuid'

export default class StockResults extends Component{
  constructor(){
    super();
    this.state ={
      results:SearchStore.getAll()
    }
    this._onChange =this._onChange.bind(this);
  }

  componentDidMount(){
    SearchStore.startListening(this._onChange)
  }

  componentwillUnMount(){
   SearchStore.stopListening(this._onChange)
  }

  _onChange(){
    this.setState({results : SearchStore.getAll()});
  }

  render(){
    if(this.state.results.length == 0){
      console.log('this.state.results:', this.state.results);
      return <div></div>
    }
    else {
     const SearchItems = this.state.results.map(result=>{
      return (
        <StockList key={uuid()} {...result}/>
      )
    });
      
   
      return(
      <table className='table'>
       <thead>
         <tr>
           <th>Name</th>
           <th>Symbol</th>
           <th>Exchange</th>
         </tr>
       </thead>
       <tbody>
        {SearchItems}
       </tbody>
     </table>
    )
   }
  }
  }
