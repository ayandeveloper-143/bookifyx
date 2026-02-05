const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const csurf = require('csurf');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
require('dotenv').config({ path: '../.env' });
const app = express();
app.use(helmet());
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true })); // adjust to your frontend URL

// ==========================
// Imports and setup
// ==========================


// ==========================
// Middleware setup
// ==========================
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

const csrfProtection = csurf({
    cookie: {
        httpOnly: true,
        sameSite: 'lax',
        secure: false
    }
});
app.use(csrfProtection);

app.use((req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
});

app.use((err, req, res, next) => {
    if (err.code === 'EBADCSRFTOKEN') {
        return res.status(403).json({
            success: false,
            message: 'Invalid CSRF token'
        });
    }
    next(err);
});

// ==========================
// Api routes
// ==========================

app.get('/api/health', (req, res) => res.json({ status: 'ok' }));

app.get('/api/csrf-token', (req, res) => {
    res.json({ csrfToken: req.csrfToken() });
});


// ==========================
// Start the server
// ==========================

app.listen(process.env.PORT, () => {
    console.log('Server running on port', process.env.PORT);
});