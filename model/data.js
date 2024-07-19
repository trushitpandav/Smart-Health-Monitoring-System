const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const DataSchema = new Schema({
    age:{
      type: String,
      required: true
    },
    blood:{
      type: String,
      required: true
    },
    bloodtype:{
      type: String,
      required: true
    },
    weight:{
      type: String,
      required: true
    },
    userID:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
   
  
  });
  let DATA = mongoose.model('Data', DataSchema)
  module.exports = DATA