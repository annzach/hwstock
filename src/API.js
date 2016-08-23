import axios from 'axios'
import AppDispatcher from './AppDispatcher'

const API ={
  lookUp(search){
    axios.get(`/api/search/${search}`)
    .then(response =>{
     console.log('APILookup:', response.data)
      return response.data;
    })
    .then(results =>{
      AppDispatcher.dispatch({
        type:'RECEIVE_RESULTS',
        results
      })
    })
    .catch(err =>console.log(err));
  },

  quote(search){
    console.log("inside quote in API", search);
    axios.get(`/api/search/fullinfo/${search}`)
    .then(response =>{
     console.log('APIQuote:', response.data)
      return response.data;
    })
    .then(results =>{
      AppDispatcher.dispatch({
        type:'RECEIVE_ALL',
        results
      })
    })
    .catch(err =>console.log(err));
  }

}

export default API;