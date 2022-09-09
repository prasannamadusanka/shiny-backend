const { isEmpty } = require('../../utils/is_empty');
const conn = require('../../service/db_service');
const {
  VIEW_NO_OF_PENDING_INGREDIENTS
} = require('../../query/Chef/view_no_of_pending_ingredients');
const { PEDIATRICIAN_MODEL } = require('../../model/Pediatrician/view_article');
const bcrypt = require('bcryptjs');
const AppError = require('../../utils/appError');
const JWT = require('jsonwebtoken');

exports.VIEW_no_of_pending_ingredients = (req, res, next) => {
    console.log("hi-chef view no of pending ingredients");
    try {
        conn.query(VIEW_NO_OF_PENDING_INGREDIENTS,(err,data,feild)=>{

            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    no_of_pending_ingredients:data
                })
            }

        })
    } catch ( err ) {

    }
}
