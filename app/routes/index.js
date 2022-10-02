const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const User = require('../model/User');

// for parsing application/json
router.use(bodyParser.json()); 

router.get('/', (req, res) => {
    res.send('hello world')
})

// POST method route
router.post('/register', (req, res) => {
    res.send(req.body)
})
router.post('/login', (req, res) => {
    res.send('login api works')
})

router.get('/test/:userId', (req, res) => {
    res.send('hello world'+req.params.userId)
})

//sample post data
// router.post('/api/register', function(req, res) {
//     const user_id = req.body.id;
//     const token = req.body.token;
//     const geo = req.body.geo;
    
    
//     res.send(req.body);
// });

router.post('/api/register', User.create);

router.use('*', (req, res) => {
    res.status(404).json({
      errors: {
        msg: 'URL_NOT_FOUND'
      }
    })
  })

 
  
  module.exports = router