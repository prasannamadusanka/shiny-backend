const { isEmpty } = require('../../utils/is_empty');
const conn = require('../../service/db_service');
const {
    INITIAL_ADVANCE,MY_PAYMENTS,SUBSCRIPTIONS,TOTAL

} = require('../../query/Client/payments');
const { PEDIATRICIAN_MODEL } = require('../../model/Pediatrician/view_article');
const bcrypt = require('bcryptjs');
const AppError = require('../../utils/appError');
const JWT = require('jsonwebtoken');

exports.initialAdvance = (req, res, next) => {
    console.log("request came");
    console.log(req.body)
    try {
        conn.query(INITIAL_ADVANCE,[req.body.params.payment_id,req.body.params.event_id,req.body.params.paid_date,req.body.params.amount], (err, data, feild) => {

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
    console.log("request d-----------------------------------------------------------------------------------------------");
    console.log("hhdhd",req.query.event_id)
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



