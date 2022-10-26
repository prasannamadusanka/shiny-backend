const { isEmpty } = require('../../utils/is_empty');
const conn = require('../../service/db_service');
const {
    UPDATE_COMPLETION_INGREDIENT_LIST_STATUS
} = require('../../query/Chef/update_event_ingredient_list_status');
const { PEDIATRICIAN_MODEL } = require('../../model/Pediatrician/view_article');
const bcrypt = require('bcryptjs');
const AppError = require('../../utils/appError');
const JWT = require('jsonwebtoken');

exports.UPDATE_event_ingredient_list_status= (req, res, next) => {
    console.log("hi-chef update ingredient list status");
    console.log(req);
    try {
        conn.query(UPDATE_COMPLETION_INGREDIENT_LIST_STATUS,[req.query.event_id],(err,data,feild)=>{

            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    ingredient_list:data
                })
            }

        })
    } catch ( err ) {

    }
}
