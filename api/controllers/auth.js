const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('User');

var sendJSONresponse = function (res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.register = (req, res) => {
    const user = new User();

    // user.name = req.body.name;
    user.email = req.body.email;
    user.username = req.body.username;

    user.setPassword(req.body.password);

    user.save((err) => {
        let token;
        token = user.generateJwt();
        res.status(200);
        res.json({
            "token": token
        });
    });
};