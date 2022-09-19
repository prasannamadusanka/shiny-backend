const { isEmpty } = require('../../utils/is_empty');
const conn = require('../../service/db_service');
const {
      VIEW_PENDING_INGREDIENTS_LIST
} = require('../../query/Chef/view_pending_ingredients_list');
const { PEDIATRICIAN_MODEL } = require('../../model/Pediatrician/view_article');
const bcrypt = require('bcryptjs');
const AppError = require('../../utils/appError');
const JWT = require('jsonwebtoken');

exports.VIEW_pending_ingredients_list = (req, res, next) => {
    console.log("hi-chef view item ingredients");
    try {
        conn.query(VIEW_PENDING_INGREDIENTS_LIST,(err,data,feild)=>{

            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    pending_ingredient_lists:data
                })
            }

        })
    } catch ( err ) {

    }
}
