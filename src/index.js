import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from "react-router";
import App from './components/App'
import StockDetails from './components/StockDetails'

class Main extends React.Component {

 constructor() {
   super();
 }
 render() {
   return(
     <div>
       {this.props.children}
     </div>
   )
 }
}

render(
 <Router history = {browserHistory}>
   <Route path='/' component ={Main}>
     <IndexRoute component={App}/>
     <Route path="/stockDetails/:symbol" component ={StockDetails}/>
   </Route>
 </Router>,
  document.getElementById('root')
);
