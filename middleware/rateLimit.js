const limiter = require('express-rate-limit');

const rateLimit = limiter({
    windowMs: 2 * 60 * 1000, // 2 minute
    max: 5, //maximum access
    message: {error: 'You have reached maximum access'}
});

module.exports = rateLimit;