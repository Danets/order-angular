const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports.login = function (req, res) {

    // passport.authenticate('local', function (err, user, info) {
    //     let token;

    //     // If Passport throws/catches an error
    //     if (err) {
    //         res.status(404).json(err);
    //         return;
    //     }

    //     // If a user is found
    //     if (user) {
    //         token = user.generateJwt();
    //         res.status(200);
    //         res.json({
    //             "token": token
    //         });
    //     } else {
    //         // If user is not found
    //         res.status(401).json(info);
    //     }
    // })(req, res);

    User.find({
                username: req.body.email, password: req.body.password
            }, function (err, user) {
                if (err) throw err;
        
                if (user.length === 1) {
                    return res.status(200).json({
                        status: 'success',
                        data: user
                    })
                } else {
                    return res.status(200).json({
                        status: 'fail',
                        message: 'Login Failed'
                    })
                }
        
            })

};