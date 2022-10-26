const { isEmpty } = require('../../utils/is_empty');
const conn = require('../../service/db_service');
const {
    VIEW_EVENTS,VIEW_BANQUETS,ADD_EVENT,GET_ORDER,GET_EVENT_COUNT,VIEW_EVENTS_WITH_LIMIT,GET_EVENT,GET_USER,VIEW_BANQUETS_DATE,myEvent
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


exports.myEvent = (req, res, next) => {
    console.log("hi bc hv h ");
    console.log(req)
    try {
        conn.query(myEvent,[req.query.event_id],(err,data,feild)=>{

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
exports.getBanquetsDate = (req, res, next) => {
    console.log("hi");
    console.log(req)
    try {
        conn.query(VIEW_BANQUETS_DATE,req.query.date,(err,data,feild)=>{

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
exports.getBanquetsDate = (req, res, next) => {
    console.log("hi");
    console.log(req)
    try {
        conn.query(VIEW_BANQUETS_DATE,req.query.date,(err,data,feild)=>{

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
        conn.query(ADD_EVENT,[req.body.params.type,req.body.params.pax,req.body.params.date,req.body.params.menu_id,req.body.params.user_id,req.body.params.banquet_id],(err,data,feild)=>{

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

exports.getEventCount = (req, res, next) => {
    console.log("getcount");
    console.log(req.query)
    try {
        conn.query(GET_EVENT_COUNT,[req.query.user_id],(err,data,feild)=>{

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

exports.getEventWithLimiit = (req, res, next) => {
    console.log("getLIMITEVENT");
    console.log(req.query)
    try {
        conn.query(VIEW_EVENTS_WITH_LIMIT,[req.query.user_id],(err,data,feild)=>{

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
exports.getEvent = (req, res, next) => {
    console.log("getEVENT");
    console.log(req.query)
    try {
        conn.query(GET_EVENT,[req.query.event_id],(err,data,feild)=>{

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
exports.getUser = (req, res, next) => {
    console.log("hi-mm------------------------------------------------------------------------------------");
    console.log(req.query.user_id)
    const y=req.query.user_id
    try {
        conn.query(GET_USER,y,(err,data,feild)=>{

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