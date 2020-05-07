const express = require('express');
const User = require('../models/user')
const router = express.Router();

router.get('/users', async (req,res) => {
  
  try {
    const user = await User.findAll()
    res.send(user)
  } catch (error) {
    res.status(500).send()
  }
})

router.post('/users', async (req,res) => {

  try {
    const user= await User.create({
      name: req.body.name
    })
    
    res.status(201).send(user)
  } catch (error) {
    res.status(400).send(error)
    
  }
})
module.exports = router;
