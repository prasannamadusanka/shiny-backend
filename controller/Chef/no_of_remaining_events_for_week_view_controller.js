const { isEmpty } = require('../../utils/is_empty');
const conn = require('../../service/db_service');
const {
    VIEW_NO_OF_REMAINING_EVENTS_FOR_WEEK
} = require('../../query/Chef/view_no_of_remaining_events_for_week');
const { PEDIATRICIAN_MODEL } = require('../../model/Pediatrician/view_article');
const bcrypt = require('bcryptjs');
const AppError = require('../../utils/appError');
const JWT = require('jsonwebtoken');

exports.VIEW_no_of_remaining_events_for_week = (req, res, next) => {
    console.log("hi-chef view no of pending ingredients");
    try {
        conn.query(VIEW_NO_OF_REMAINING_EVENTS_FOR_WEEK,(err,data,feild)=>{

            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    no_of_remaining_events_for_week:data
                })
            }

        })
    } catch ( err ) {

    }
}
