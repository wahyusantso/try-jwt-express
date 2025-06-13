const logRequest = (req, res, next) => {
    console.log('meminta request path: ', req.path);
    next(); //melanjutkan proses
}

module.exports = logRequest;