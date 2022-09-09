const { isEmpty } = require('../../utils/is_empty');
const conn = require('../../service/db_service');
const {
  VIEW_EVENT_INGREDIENT_LIST
} = require('../../query/Chef/view_event_ingredient_list');
const { PEDIATRICIAN_MODEL } = require('../../model/Pediatrician/view_article');
const bcrypt = require('bcryptjs');
const AppError = require('../../utils/appError');
const JWT = require('jsonwebtoken');

exports.VIEW_event_ingredient_list = (req, res, next) => {
    console.log("hi-chef view event ingredient list");
    console.log(req.body);
    try {
        conn.query(VIEW_EVENT_INGREDIENT_LIST,[req.body.event_id],(err,data,feild)=>{

            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    event_ingredient_list:data
                })
            }

        })
    } catch ( err ) {

    }
}
