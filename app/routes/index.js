const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.send('hello world')
  })

router.use('*', (req, res) => {
    res.status(404).json({
      errors: {
        msg: 'URL_NOT_FOUND'
      }
    })
  })

 
  
  module.exports = router