const bcrypt = require('bcryptjs');
const AppError = require('../../utils/appError');
const JWT = require('jsonwebtoken');
const { isEmpty } = require('../../utils/is_empty');
const conn = require('../../service/db_service');
const { insert_menu_item } = require('../../query/client/insert_menu');
const { update_menu } = require('../../query/client/insert_menu');


exports.addNewMenu = (req, res, next) => {
    console.log(req.body)
    
    // if (isEmpty(req.body)) return next(new AppError("form data not found", 400));

    try {
        // const { error } = Add_Event_Record.validate(req.body);
        
      //  if (error) return next(new AppError(error.details[0].message, 400));

     
        // try {
            conn.query(insert_menu_item, [req.body.event_id,req.body.food_item_id], (err, data, feilds) => {
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

exports.updateEventMenu = (req, res, next) => {
    console.log(req.body)
    
    // if (isEmpty(req.body)) return next(new AppError("form data not found", 400));

    try {
        // const { error } = Add_Event_Record.validate(req.body);
        
      //  if (error) return next(new AppError(error.details[0].message, 400));

     
        // try {
            conn.query(update_menu, [req.body.menu_id,req.body.event_id], (err, data, feilds) => {
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