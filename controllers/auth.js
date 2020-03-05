const bcrypt = require('bcryptjs');
const db = require('../models');

// POST Registration - Creating New User

const signup = (req, res) => {
  if (!req.body.username || !req.body.email || !req.body.password) {
    return res.status(400).json({
      status: 400,
      message: 'Please enter your username, email and password'
    });
  }
  // Verified Account Does Not Exist

  db.User.findOne({ email: req.body.email }, (err, foundUser) => {
    if (err)
      return res.status(500).json({
        status: 500,
        message: 'Something went wrong. Please try again'
      });

    if (foundUser)
      return res.status(400).json({
        status: 400,
        message: 'Email address has already been registered. Please try again'
      });

    // Generated Salt

    bcrypt.genSalt(10, (err, salt) => {
      if (err)
        return res.status(500).json({
          status: 500,
          message: 'Something went wrong. Please try again'
        });

      // Hashing Users Password

      bcrypt.hash(req.body.password, salt, (err, hash) => {
        if (err)
          return res.status(500).json({
            status: 500,
            message: 'Something went wrong. Please try again'
          });

        const newUser = {
          username: req.body.username,
          email: req.body.email,
          password: hash,
        };

        db.User.create(newUser, (err, savedUser) => {
          if (err) return res.status(500).json({ status: 500, message: err });
          res.sendStatus(201);
        });
      });
    });
  });
};

// POST Login - Authenticate User, create session

const login = (req, res) => {
  // console.log(req.body);
  if (!req.body.email || !req.body.password) {
    return res
      .status(400)
      .json({ status: 400, message: 'Please enter your email and password' });
  }

  db.User.findOne({ email: req.body.email }, (err, foundUser) => {
    if (err)
      return res.status(500).json({
        status: 500,
        message: 'Something went wrong. Please try again'
      });

    if (!foundUser) {
      return res
        .status(400)
        .json({ status: 400, message: 'Username or password is incorrect' });
    }

    bcrypt.compare(req.body.password, foundUser.password, (err, isMatch) => {
      if (err)
        return res.status(500).json({
          status: 500,
          message: 'Something went wrong. Please try again'
        });

      if (isMatch) {
        req.session.currentUser = { id: foundUser._id, username: foundUser.username };
        return res
          .status(200)
          .json({ status: 200, message: 'Success', data: foundUser._id });
      } else {
        return res
          .status(400)
          .json({ status: 400, message: 'Username or password is incorrect' });
      }
    });
  });
};

// POST Logout - Destroying Session

const logout = (req, res) => {
  if (!req.session.currentUser)
    return res.status(401).json({ status: 401, message: 'Unauthorized' });
  req.session.destroy(err => {
    if (err)
      return res.status(500).json({
        status: 500,
        message: 'Something went wrong. Please try again'
      });
    res.sendStatus(200);
  });
};

// GET Verifying Current User

const verify = (req, res) => {
  if (!req.session.currentUser)
    return res.status(401).json({ status: 401, message: 'Unauthorized' });
  res.status(200).json({
    status: 200,
    message: `Current User verified. User ID: ${req.session.currentUser.id}`
  });
};

module.exports = {
  signup,
  login,
  verify,
  logout
};
