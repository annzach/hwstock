import React,{ Component } from 'react'
import SearchActions from '../actions/SearchActions'
import StockDetails from './StockDetails'
import {Link, browserHistory} from 'react-router'

export default class StockList extends Component{
  constructor(){
    super();
      this.getDetails =this.getDetails.bind(this);
      
  }

  getDetails(e){
    console.log('e.target:', e.target.innerHTML)
    var symbolValue = e.target.innerHTML;
    console.log('symbolValue:', symbolValue)
    
     // innerHtML is send as the symbol
    SearchActions.quote(symbolValue);
    browserHistory.push(`/stockDetails/${symbolValue}`);
  }
  render(){
    let { Symbol,Name,Exchange} = this.props;
    //console.log(itemId[0]);
    return(
      <tr >
        <td>{Name}</td>
        <td onClick = {this.getDetails} >{Symbol}</td>
        <td>{Exchange}</td>
      </tr>
    )
  }
}
