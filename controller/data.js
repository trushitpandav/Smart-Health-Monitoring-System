let DATA = require('../model/data')



exports.AddHealthData = async function(req, res, next) {
    try {
        req.body.userID = req.userID
        let Create = await DATA.create(req.body)
      
     
        res.status(201).json({
            status: 'success',
            message:"Health Data create successfully",
            data:Create
        })
    } catch (error) {
        res.status(404).json({
            status: 'error',
            message: error.message
        })
    }
}
exports.ViewHealthData = async function(req, res, next) {
    try {
       
        let Create = await DATA.find({userID: req.userID}).populate("userID")
        res.status(201).json({
            status: 'success',
            message:"view data successfully",
            data:Create
        })
    } catch (error) {
        res.status(404).json({
            status: 'error',
            message: error.message
        })
    }
}
exports.HealthUpdate = async function(req, res, next) {
    try {
      
        let data = await DATA.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.status(201).json({
            status: 'success',
            message:"health update successfully",
            data:data
        })
    } catch (error) {
        res.status(404).json({
            status: 'error',
            message: error.message
        })
    }
}
exports.HealthDelete = async function(req, res, next) {
    try {
        await DATA.findByIdAndDelete(req.params.id)
        res.status(201).json({
            status: 'success',
            message:"delete successfully",
            
        })
    } catch (error) {
        res.status(404).json({
            status: 'error',
            message: error.message
        })
    }
}
