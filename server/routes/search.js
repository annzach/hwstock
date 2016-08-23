const express = require('express');
const router = express.Router();
const axios = require('axios');

router.route('/:search')
      .get((req, res) => {
             axios.get(`http://dev.markitondemand.com/MODApis/Api/v2/Lookup/json?input=${req.params.search}`)
              .then(results=>{
               res.send(results.data);
              })

              .catch(err=>console.log(err))
      })

router.route('/fullinfo/:searchinfo')
      .get((req, res) => {
        console.log("inside search.js");
             axios.get(`http://dev.markitondemand.com/MODApis/Api/v2/Quote/json?symbol=${req.params.searchinfo}`)
              .then(results=>{
               console.log('response.data:', results.data)
               res.send(results.data);
              })
            
              .catch(err=>console.log(err))
      })

module.exports = router;

