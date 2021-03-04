const express = require('express');

const router = express.Router();

// login expects email/password
// successful login returns email and a fake token (if we ever want to use it)
const users = [
  {
    id : 1,
    email : 'test',
    password : 'test'
  }
]
router.post('/login', (req, res) => {
  try {
    const authenicated = users.filter(user => {
      return user.email === req.body.email && user.password === req.body.password
    })
    if(authenicated.length){
      res.status(200).json({ success: true, email: req.body.email, token: '12345luggage' });
    }
    else {
      res.status(401).json({ success: false, error: 'Bad login information' });
      return;
    }
  } catch (error) {
    res.status(500).json({ success: false, error: 'Unknown error' });
  }
})

module.exports = router;