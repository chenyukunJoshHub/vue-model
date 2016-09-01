var products = require('./routes/products')

module.exports = function(app){

    app.use('/api', products);

};
