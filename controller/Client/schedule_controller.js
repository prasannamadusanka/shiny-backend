const { isEmpty } = require('../../utils/is_empty');
const conn = require('../../service/db_service');

const { insert_schedule_record } = require('../../query/client/insert_schedule');
const { VIEW_SCHEDULE } = require('../../query/client/view_schedule');

const {Add_Event_Record} = require('../../model/cient/event');
const bcrypt = require('bcryptjs');
const AppError = require('../../utils/appError');
const JWT = require('jsonwebtoken');


exports.addSchedule = (req, res, next) => {
    console.log(req.body)
    
    // if (isEmpty(req.body)) return next(new AppError("form data not found", 400));

    try {
         const { error } = Add_Event_Record.validate(req.body);
        
      //  if (error) return next(new AppError(error.details[0].message, 400));

     
        // try {
            conn.query(insert_schedule_record, [req.body.event_id, req.body.startTime, req.body.endTime, req.body.description], (err, data, feilds) => {
                if (err) return next(new AppError(err, 500));
                res.status(201).json({
                    data : data
                })
            })
 

    } catch (err) {
        res.status(500).json({
            error: err
        })
    }
}
exports.viewSchedule = (req, res, next) => {
    console.log(req.query.event_id)
    
    // if (isEmpty(req.body)) return next(new AppError("form data not found", 400));

    console.log();
    try {
        conn.query(VIEW_SCHEDULE,[req.query.event_id],(err,data,feild)=>{

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

