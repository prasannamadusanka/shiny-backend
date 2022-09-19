const { isEmpty } = require('../../utils/is_empty');
const conn = require('../../service/db_service');
const {
      VIEW_EVENT_GENERAL
} = require('../../query/Chef/view_event_general');
const { PEDIATRICIAN_MODEL } = require('../../model/Pediatrician/view_article');
const bcrypt = require('bcryptjs');
const AppError = require('../../utils/appError');
const JWT = require('jsonwebtoken');

exports.VIEW_event_general = (req, res, next) => {
    console.log("hi-chef view event general");
    console.log(req.query.date)
    try {
        conn.query(VIEW_EVENT_GENERAL,[req.query.date],(err,data,feild)=>{

            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    general_event:data
                })
            }

        })
    } catch ( err ) {

    }
}