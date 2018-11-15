const router = require('express').Router;
const bookRoutes = require('./books');

app.use('/books', bookRoutes);

module.exports = router;