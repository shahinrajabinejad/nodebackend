const express = require('express');
const app = express();
//var cookieParser = require('cookie-parser')
//var logger = require('morgan');
//Settings
app.set('port', process.env.PORT || 3000);
//Middlewares
//app.use(logger('dev'));
app.use(express.json());
//app.use(cookieParser())
// Configurar cabeceras y cors
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});
//auth
app.use(function auth(req, res, next) {
  console.log(req.headers);
  var authHeader = req.headers.authorization;
  if (!authHeader) {
    var err = new Error('you are not Authenticated');
    res.setHeader('www-Authenticate', 'Basic');
    err.status = 401;
    next(err);
  }
  var auth = new Buffer(authHeader.split(' ')[1], 'base64').toString().split(':');
  var username = auth[0];
  var password = auth[1];
  if (username === 'admin' && password === 'admin') {
    next();
  } else {
    var err = new Error('you are not Authenticated');
    res.setHeader('www-Authenticate', 'Basic');
    err.status = 401;
    next(err);
  }
});
//app.use('auth');
// importing routes
const companyRouters = require('./routes/CompanyRoute')
//Route
app.use('/company', companyRouters)

// importing routes
const employeeRouters = require('./routes/EmployeeRoute')
//Route
app.use('/employee', employeeRouters)
////

////
app.use('/test', (req, res) => {
  res.send("Test route");
});
app.use('/', (req, res) => {
  res.send("Hello World form NodeJS express.");
});

app.listen(app.get('port'), () => {
  console.log("Start server on port " + app.get('port'))
})