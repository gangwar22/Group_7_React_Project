const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require('./User');

const jwtSecret = process.env.JWT_SECRET || "qwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnm";

router.post('/loginuser', async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ success: false, msg: 'Invalid Credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ success: false, msg: 'Invalid Credentials' });
    }

    const payload = {
      user: {
        id: user.id
      }
    };

    jwt.sign(
      payload,
      jwtSecret,
      { expiresIn: '1h' }, // expiresIn should be a string
      (err, token) => {
        if (err) throw err;
        res.json({ success: true, authToken: token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
