const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ReportSchema = new Schema({
  stress:{
    type: String,
    required: true
  },
  reducestress:{
    type: String,
    required: true
  },
  fat:{
    type: String,
    required: true
  },
  userID:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }

});
let REPORT = mongoose.model('Report', ReportSchema)
module.exports = REPORT