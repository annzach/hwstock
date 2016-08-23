import React, { Component } from 'react';
import SearchActions from '../actions/SearchActions'

export default class SearchForm extends Component {
 constructor(){
  super();
  this.state = {
    search:''
  }
  this.changeSearchInput = this.changeSearchInput.bind(this);
  this.submit =this.submit.bind(this);
 }

changeSearchInput(e){
    let search = e.target.value;
    this.setState({ search });
  }

  submit(e) {
    e.preventDefault();
    let { search } = this.state;
    console.log('search',{search})
    SearchActions.lookUp(search);
    //console.log('search:',search);
    this.setState({search: ''});
  }

  render(){
    return(
      <div>
        <form onSubmit={this.submit}>
        <input type="text" placeholder ="Enter Symbol" 
               value = {this.state.search}
               onChange ={this.changeSearchInput} /> <br/><br/>
        <button type ="submit" className ="btn btn-primary">Search</button>
        </form>
      </div>
      )
    }
  }
