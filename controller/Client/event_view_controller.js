const { isEmpty } = require('../../utils/is_empty');
const conn = require('../../service/db_service');
const {
    VIEW_EVENTS,VIEW_BANQUETS,ADD_EVENT,GET_ORDER
} = require('../../query/Client/view_events');
const { PEDIATRICIAN_MODEL } = require('../../model/Pediatrician/view_article');
const bcrypt = require('bcryptjs');
const AppError = require('../../utils/appError');
const JWT = require('jsonwebtoken');

exports.VIEW_events = (req, res, next) => {
    console.log("hi");
    console.log(req)
    try {
        conn.query(VIEW_EVENTS,[req.query.user_id],(err,data,feild)=>{

            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    menus:data
                })
            }

        })
    } catch ( err ) {

    }
}
exports.getDates = (req, res, next) => {
    console.log("hi");
    console.log(req)
    try {
        conn.query(VIEW_EVENTS,[req.query.user_id],(err,data,feild)=>{

            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    menus:data
                })
            }

        })
    } catch ( err ) {

    }
}
exports.getBanquets = (req, res, next) => {
    console.log("hi");
    console.log(req)
    try {
        conn.query(VIEW_BANQUETS,(err,data,feild)=>{

            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    menus:data
                })
            }

        })
    } catch ( err ) {

    }
}
exports.addevent = (req, res, next) => {
    console.log("hi");
    console.log(req.body.params.type)
    try {
        conn.query(ADD_EVENT,[req.body.params.type,req.body.params.pax,req.body.params.date,req.body.params.user_id,req.body.params.banquet_id],(err,data,feild)=>{

            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    menus:data
                })
            }

        })
    } catch ( err ) {

    }
}

exports.getOrder = (req, res, next) => {
    console.log("getorder");
    console.log(req.query)
    try {
        conn.query(GET_ORDER,[req.query.event_id],(err,data,feild)=>{

            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    menus:data
                })
            }

        })
    } catch ( err ) {

    }
}

