const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const NotificationSchema = new Schema({
  blood:{
    type: String,
    required: true
  },
  checkup:{
    type: String,
    required: true
  },
  time:{
    type: String,
    required: true
  },
  userID:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }

});
let Notification = mongoose.model('Notification', NotificationSchema)
module.exports = Notification