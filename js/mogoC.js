'use strict';
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/auth');

module.exports = mongoose;// JavaScript Document

'use strict';
const mongoose = require('../../config/mongoose'),
      Schema = mongoose.Schema;

const schemas = {

    userSchema: new Schema({
        username: {type: String},
        password: {type: String},
    })

};

module.exports = schemas;