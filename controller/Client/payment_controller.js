const { isEmpty } = require('../../utils/is_empty');
const conn = require('../../service/db_service');
const {
    INITIAL_ADVANCE,MY_PAYMENTS,SUBSCRIPTIONS,TOTAL,USER_SUBSCRIPTIONS,USER_ADVANCES, EVENT_ADVANCES, EVENT_TOTAL

} = require('../../query/Client/payments');
const { PEDIATRICIAN_MODEL } = require('../../model/Pediatrician/view_article');
const bcrypt = require('bcryptjs');
const AppError = require('../../utils/appError');
const JWT = require('jsonwebtoken');

exports.initialAdvance = (req, res, next) => {
    console.log("request came");
    console.log(req.body)
    try {
        conn.query(INITIAL_ADVANCE,[req.body.params.payment_id,req.body.params.event_id,req.body.params.paid_date,req.body.params.amount,req.body.params.pay_by,req.body.params.pay_for], (err, data, feild) => {

            if (err) {
                return next(new AppError(err))
                console.log(err)
            }
            else {
                res.status(200).json({
                    food1: data
                })
            }

        })
    } catch (err) {

    }
}
exports.Advance_payments = (req, res, next) => {
    console.log("request c-----------------------------------------------------------------------------------------------");
    console.log("hhdhdfjgnjfbj",req.query.event_id)
    try {
        conn.query(MY_PAYMENTS,[req.query.event_id], (err, data, feild) => {

            if (err) {
                return next(new AppError(err))
            }
            else {
                res.status(200).json({
                    food1: data
                })
            }

        })
    } catch (err) {

    }
}
exports.Subscriptions = (req, res, next) => {
    // console.log("request d-----------------------------------------------------------------------------------------------");
    // console.log("hhdhd",req.query.event_id)
    try {
        conn.query(SUBSCRIPTIONS,[req.query.event_id], (err, data, feild) => {

            if (err) {
                return next(new AppError(err))
            }
            else {
                res.status(200).json({
                    food1: data
                })
            }

        })
    } catch (err) {

    }
}
exports.Total = (req, res, next) => {
    console.log("request total");
    console.log("madu",req)
    try {
        conn.query(TOTAL,[req.query.user_id], (err, data, feild) => {

            if (err) {
                return next(new AppError(err))
            }
            else {
                res.status(200).json({
                    food1: data
                })
            }

        })
    } catch (err) {

    }
}
exports.getToatalBill = (req, res, next) => {
    console.log("getbill");
    console.log(req.query)
    try {
        conn.query(USER_SUBSCRIPTIONS,[req.query.user_id],(err,data,feild)=>{

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
exports.getToatalAdvances = (req, res, next) => {
    console.log("getada----------------------------------------------------------------------------");
    console.log(req.query)
    try {
        conn.query(USER_ADVANCES,[req.query.user_id],(err,data,feild)=>{

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

exports.getEventAdvances = (req, res, next) => {
    console.log("getada----------------------------------------------------------------------------");
    console.log(req.query)
    try {
        conn.query(EVENT_ADVANCES,[req.query.event_id],(err,data,feild)=>{

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
exports.getEventTotal = (req, res, next) => {
    console.log("getada----------------------------------------------------------------------------");
    console.log(req)
    try {
        conn.query(EVENT_TOTAL,[req.query.event_id],(err,data,feild)=>{

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

