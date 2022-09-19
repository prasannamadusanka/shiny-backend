const { isEmpty } = require('../../utils/is_empty');
const conn = require('../../service/db_service');
const { 
    INSERT_CREATE_RECEPE_NEXT
} = require('../../query/chef/insert_create_recepe_next');

//const {Add_Event_Record} = require('../../model/cient/event');
const bcrypt = require('bcryptjs');
const AppError = require('../../utils/appError');
const JWT = require('jsonwebtoken');


exports.insert_recepe_next = (req, res, next) => {
    console.log(req.body)

    // if (isEmpty(req.body)) return next(new AppError("form data not found", 400));

    try {
        //const { error } = Add_Event_Record.validate(req.body);
        
      //  if (error) return next(new AppError(error.details[0].message, 400));

     //[req.body.ingredient_id,req.body.name,req.body.type_id,req.body.stock,req.body.pending_qty,req.body.ordered_date,req.body.description,req.body.image,req.body.status]
        // try {
            conn.query(INSERT_CREATE_RECEPE_NEXT, [req.body.name,req.body.type_id,req.body.description], (err, data, feilds) => {
                if (err) return next(new AppError(err, 500));
                res.status(201).json({
                    recepe_data : data
                })
            })
        // } catch (err){
        //     console.log("errors")
        // }


    } catch (err) {
        res.status(500).json({
            error: err
        })
    }
}
