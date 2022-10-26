const { isEmpty } = require('../../utils/is_empty');
const conn = require('../../service/db_service');
const {
    VIEW_ROUGH_EVENT_PLAN
} = require('../../query/Eventplanner/view_rough_event_plan');
const { PEDIATRICIAN_MODEL } = require('../../model/Pediatrician/view_article');
const bcrypt = require('bcryptjs');
const AppError = require('../../utils/appError');
const JWT = require('jsonwebtoken');

exports.VIEW_rough_event_plan = (req, res, next) => {
    console.log("hi-chef view rough event plan---------------------------");
    console.log(req);
    try {
        conn.query(VIEW_ROUGH_EVENT_PLAN,(err,data,feild)=>{

            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    rough_event_plan:data
                })
            }

        })
    } catch ( err ) {

    }
}
