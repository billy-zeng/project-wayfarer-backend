const db = require('../models');

const show = (request, response) => {
  if (!request.session.currentUser) return response.status(401).json({
    status: 401,
    message: 'Hey you! Stop right there. Authorization required.'
  })

  db.User.findById(request.session.currentUser.id, (error, foundUser) => {
    if (error) return response.status(500).json({
      status: 500,
      message: error,
    });

    response.status(200).json({
      status: 200,
      data: foundUser,
    });
  });
};

const edit = (request, response) => {
  if (!request.session.currentUser) return response.status(401).json({
    status: 401,
    message: 'Hey you! Stop right there. Authorization required.'
  });

  db.User.findByIdAndUpdate(
    request.session.currentUser.id, 
    request.body,
    { new: true },
    (error, foundUser) => {
      if (error) return response.status(500).json({
        status: 500,
        message: error,
      });
    response.status(200).json({
      status: 200,
      data: foundUser,
    });
  });
};

module.exports = {
  show,
  edit,
};
