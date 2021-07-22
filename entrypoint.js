// const express=require('express');
// //const cookieParser = require('cookie-parser');
// const app=express();
// const port=8000;

// const bodyParser = require('body-parser');
// const db = require('./configure/mongoose');
// app.use(express.json());
// app.use(express.urlencoded({
//   extended: true
// }));

// // const expressLayouts = require('express-ejs-layouts');
 
// // app.use(express.urlencoded());

// // app.use(cookieParser());

// // app.use(express.static('./assets'));

// // app.use(expressLayouts);
// // // extract style and scripts from sub pages into the layout
// // app.set('layout extractStyles', true);
// // app.set('layout extractScripts', true);

// //USE EXPRESS ROUTER
// app.use('/',require('./routers/index'));
// //VIEW SET UP
// app.set('view engine','ejs');
// app.set('views','./views');


// app.listen(port,function(err){
//     if(err){
//         console.log(`Error in running the server:${err}`);
//         return;
//     }
//     console.log(`server is running on port:${port}`);
// });
const express = require('express');

const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;
const bodyParser = require('body-parser');
const expressLayouts = require('express-ejs-layouts');
const db = require('./configure/mongoose');
// used for session cookie
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./configure/passport-local-strategy');

app.use(express.urlencoded({
    extended: true
   }));

app.use(cookieParser());

app.use(express.static('./assets'));

app.use(expressLayouts);
// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);




// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(session({
  name: 'codeial',
  // TODO change the secret before deployment in production mode
  secret: 'blahsomething',
  saveUninitialized: false,//save from extra data when user has not logged in
  resave: false,//no need to save cookie data again and again
  //how long the cookie should be valid
  cookie: {
      maxAge: (1000 * 60 * 100)
  }
}));

app.use(passport.initialize());
app.use(passport.session());

// use express router
app.use('/', require('./routers'));

app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});