const { isEmpty } = require('../../utils/is_empty');
const conn = require('../../service/db_service');
const {
    VIEW_FULLEVENT
} = require('../../query/Chef/view_full_event');
const { PEDIATRICIAN_MODEL } = require('../../model/Pediatrician/view_article');
const bcrypt = require('bcryptjs');
const AppError = require('../../utils/appError');
const JWT = require('jsonwebtoken');

exports.VIEW_full_event = (req, res, next) => {
    console.log("hi-chef view full event");
    console.log(req.query.event_id);
    try {
        conn.query(VIEW_FULLEVENT,[req.query.event_id],(err,data,feild)=>{

            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    event:data
                })
            }

        })
    } catch ( err ) {

    }
}
