const express = require('express')

const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
// const mongoose = require('mongoose');

// const url = 'mongodb://localhost/user';

// const User = require('./server/models/user');
const Post = require('./api/models/post');

const passport = require('passport');

// [SH] Bring in the data model
require('./api/models/db');
// [SH] Bring in the Passport config after model is defined
require('./api/config/passport');

const routesApi = require('./api/routes/index');

const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(cors());

// [SH] Initialise Passport before using the route middleware
app.use(passport.initialize());

// [SH] Use the API routes when path starts with /api
app.use('/api', routesApi);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers
// Catch unauthorised errors
app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.status(401);
        res.json({ "message": err.name + ": " + err.message });
    }
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;

// mongoose.connect(url, { useNewUrlParser: true }, function (err) {
//     if (err) throw err;
//     app.listen(3000, () => console.log('Angular server running on port 3000!'));
// });

// app.post('/api/user/login', (req, res) => {

//     User.find({
//         username: req.body.username, password: req.body.password
//     }, function (err, user) {
//         if (err) throw err;

//         if (user.length === 1) {
//             return res.status(200).json({
//                 status: 'success',
//                 data: user
//             })
//         } else {
//             return res.status(200).json({
//                 status: 'fail',
//                 message: 'Login Failed'
//             })
//         }

//     })
// })

// app.post('/api/user/signup', (req, res) => {

//     const user = new User({
//         username: req.body.username,
//         password: req.body.password
//     })
//     // user.save((err, doc) => {
//     //     if (err) throw err;

//     //     return res.status(200).json({
//     //         status: 'success',
//     //         data: doc
//     //     })
//     // })
//     user.save()
//         .then(res => {
//             return res.status(200).json({
//                 status: 'success',
//                 data: user
//             })
//         })
//         .catch(err => console.error(err))

// })

// app.get('/api/post', (req, res) => {
//     Post.find({}, [], { sort: { _id: -1 } }, (err, doc) => {
//         if (err) throw err;
//         return res.status(200).json({
//             status: 'success',
//             data: doc
//         })
//     })
// })

// app.get('/api/post:id', (req, res) => {
//     const post = new Post({
//         title: req.body.title,
//         description: req.body.description
//     })
//     post.save((err, res) => {
//         if (err) throw err;
//         return res.status(200).json({
//             status: 'success',
//             data: res
//         })
//     })
// })

// app.post('/api/post', (req, res) => {

//     const post = new Post({
//         title: req.body.title,
//         description: req.body.description
//     })
//     post.save((err, doc) => {
//         if (err) throw err;
//         return res.status(200).json({
//             status: 'success',
//             data: doc
//         })
//     })
// })

// app.put('/api/post', (req, res) => {
//     Post.findByIdAndUpdate(
//         { _id: req.body.id },
//         { title: req.body.title, description: req.body.description },
//         { new: true },
//         (err, doc) => {
//             if (err) throw err;
//             return res.status(200).json({
//                 status: 'success',
//                 data: doc
//             })
//         })
// })

// app.post('/api/post/deletePost', (req, res) => {
//     Post.findByIdAndDelete(req.body.id,
//         (err, doc) => {
//             if (err) throw err;
//             return res.status(200).json({
//                 status: 'success',
//                 data: doc
//             })
//         })
// })
