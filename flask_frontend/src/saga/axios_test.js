const axios = require('axios')

axios.get('http://127.0.0.1:5000/test_json')
  .then(response => {
    console.log(response)
  })

