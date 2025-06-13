require('dotenv').config();
const port = process.env.PORT;
const express = require('express');
const routeUser = require('./route/users');
const middlewareLogRequest = require('./middleware/logs');

const app = express();

//pattern = app.method(path, handler)
// app.use("/", (req, res, next) => { //use dapat menghandle get, post, put
//     res.send('testing api pertama, hello JS');
// })

//create middleware
app.use(middlewareLogRequest);

//izinkan request body json
app.use(express.json());

app.use('/users', routeUser); //grouping route path;

app.listen(port, () => {
    console.log(`server running di port ${port}`);
});