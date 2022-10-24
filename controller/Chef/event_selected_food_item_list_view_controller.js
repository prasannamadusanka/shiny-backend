const { isEmpty } = require('../../utils/is_empty');
const conn = require('../../service/db_service');
const {
    VIEW_SELECTED_MENU
} = require('../../query/Chef/view_selected_menu');
const { PEDIATRICIAN_MODEL } = require('../../model/Pediatrician/view_article');
const bcrypt = require('bcryptjs');
const AppError = require('../../utils/appError');
const JWT = require('jsonwebtoken');

exports.VIEW_event_selected_menu = (req, res, next) => {
    console.log("hi-chef view event ingredient list");
    console.log(req.query.event_id);
    try {
        conn.query(VIEW_SELECTED_MENU,[req.query.event_id],(err,data,feild)=>{

            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    event_selected_menu:data
                })
            }

        })
    } catch ( err ) {

    }
}
