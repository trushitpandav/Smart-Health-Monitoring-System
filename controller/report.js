let Report = require('../model/Report')



exports.GenHealthReport = async function(req, res, next) {
    try {
        req.body.userID = req.userID
        let Create = await Report.create(req.body)
      
        res.status(201).json({
            status: 'success',
            message:"report generate successfully",
            data:Create
        })
    } catch (error) {
        res.status(404).json({
            status: 'error',
            message: error.message
        })
    }
}
exports.ViewHistoricalReport = async function(req, res, next) {
    try {
       
        let Create = await DATA.find({userID: req.userID}).populate("userID")
        res.status(201).json({
            status: 'success',
            message:"view historical report successfully",
            data:Create
        })
    } catch (error) {
        res.status(404).json({
            status: 'error',
            message: error.message
        })
    }
}