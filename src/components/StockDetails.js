import React, { Component } from 'react';
import SearchActions from '../actions/SearchActions'
import SearchStore from '../stores/SearchStore'


export default class StockDetails extends Component {
  constructor(){
    super();
    this.state={
      stockdetails : SearchStore.getDetails()
    }
    this._onChange = this._onChange.bind(this);
    this.Refresh =this.Refresh.bind(this);
  }
  componentDidMount(){
    SearchStore.startListening(this._onChange);
  }

  componentWillUnmount(){
    SearchStore.stopListening(this._onChange);
  }
   Refresh(e){
   let symbol = e.target.value;
   SearchActions.quote(symbol)
   }
  _onChange(){
    this.setState({stockdetails : SearchStore.getDetails()});
  }
  render(){
    let { Name , Symbol, LastPrice , Timestamp , MarketCap , Volume , High , Low , Open} = this.state.stockdetails;
    console.log('this.state.stockdetails:', this.state.stockdetails)
    

    
    return (
      <div>
       <br/>
        <h3>Stock Details</h3>

          <p>Company : <i>{Name}</i></p>
          <p>Market Cap : <i>{MarketCap}</i></p>
          <p>High : <i>{High}</i></p>
          <p>Low : <i>{Low}</i></p>
          <p>Open : <i>{Open}</i></p>
          <p>LastPrice : <i>{LastPrice}</i></p>
          <p>Volume : <i>{Volume}</i></p>
          <p>Updated At : <i>{Timestamp}</i></p>
          <button value = {Symbol} onClick ={this.Refresh}>Refresh</button>

      </div>
    )
  
}
}
