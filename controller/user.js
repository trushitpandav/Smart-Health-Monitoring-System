let USER = require('../model/user')
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const { request } = require('../app');


exports.sequre = async function(req, res, next) {
    try {
        let token = req.headers.authorization
        if(!token){
            throw new Error("please provide token")
        }
        let decoded = jwt.verify(token,"DEMO")
        req.userID = decoded.id
        let check = await USER.findById(decoded.id)
        if(!check){
            throw new Error("user not found")
        }
        next()
    
    } catch (error) {
        res.status(404).json({
            status: 'error',
            message: error.message
        })
    }
}
exports.register = async function(req, res, next) {
    try {
        req.body.password = await bcrypt.hash(req.body.password,10)
        let Create = await USER.create(req.body)
        res.status(201).json({
            status: 'success',
            message:"user created successfully",
            data:Create
        })
    } catch (error) {
        res.status(404).json({
            status: 'error',
            message: error.message
        })
    }
}
exports.login = async function(req, res, next) {
    try {
      let check = await USER.findOne({email:req.body.email})
      if(!check){
        throw new Error("user not found")
      }
      let pass = await bcrypt.compare(req.body.password,check.password)
      if(!pass){
        throw new Error("password invalid")
      }
      var token = jwt.sign({ id : check._id}, 'DEMO');

        res.status(201).json({
            status: 'success',
            message:"user login successfully",
            data:check,
            token
        })
    } catch (error) {
        res.status(404).json({
            status: 'error',
            message: error.message
        })
    }
}
exports.UserUpdate = async function(req, res, next) {
    try {
        req.body.password = await bcrypt.hash(req.body.password,10)
        let data = await USER.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.status(201).json({
            status: 'success',
            message:"user update successfully",
            data:data
        })
    } catch (error) {
        res.status(404).json({
            status: 'error',
            message: error.message
        })
    }
}