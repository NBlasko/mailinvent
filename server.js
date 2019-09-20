if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(cors({
//  origin: process.env.CLIENT_URL
}));

app.use(express.json());

// initialize passport
app.use('/api', require('./routes/api'));


// Catch 404 errors
// In production replace this one with serving the front end
app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

// error handler function
app.use((err, req, res, next) => {
    const error = app.get('env') === 'development' ? err : {};
    const status = err.status || 500;
    //respond to client

    res.status(status).json({
        error: {
            message: error.message,
        }
    });
    // respond to server
    console.error("error in handler function", err);
})

//start the server
const port = process.env.PORT || 3001;
app.listen(port, () => { console.log(`listening on ${port}...`) });