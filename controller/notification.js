let Notification = require('../model/notification')



exports.AddNotification = async function(req, res, next) {
    try {

        req.body.userID = req.userID
        let Create = await Notification.create(req.body)
      
     
        res.status(201).json({
            status: 'success',
            message:"notification add successfully",
            data:Create
        })
    } catch (error) {
        res.status(404).json({
            status: 'error',
            message: error.message
        })
    }
}
exports.ViewNotification = async function(req, res, next) {
    try {
        let Create = await DATA.find({userID: req.userID}).populate("userID")
        res.status(201).json({
            status: 'success',
            message:"view Notification successfully",
            data:Create
        })
    } catch (error) {
        res.status(404).json({
            status: 'error',
            message: error.message
        })
    }
}