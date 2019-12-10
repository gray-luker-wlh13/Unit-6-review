require('dotenv').config();
const express = require('express'),
      session = require('express-session'),
      massive = require('massive'),
      authCtrl = require('./authController'),
      {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env,
      app = express();
    

app.use(express.json());

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {maxAge: 1000 * 60 * 60}
}));

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('db connected');
});

// authCtrl endpoints
app.post('/auth/login', authCtrl.login);
app.post('/auth/register', authCtrl.register);
app.post('/auth/logout', authCtrl.logout);
app.get('/auth/user', authCtrl.getUser);

// ctrl endpoints


const port = SERVER_PORT;
app.listen(port, () => console.log(`Server running on ${port}`));