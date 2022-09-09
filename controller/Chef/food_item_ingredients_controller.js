const { isEmpty } = require('../../utils/is_empty');
const conn = require('../../service/db_service');
const {
      VIEW_ITEM_INGREDIENTS
} = require('../../query/Chef/view_item_ingredients');
const { PEDIATRICIAN_MODEL } = require('../../model/Pediatrician/view_article');
const bcrypt = require('bcryptjs');
const AppError = require('../../utils/appError');
const JWT = require('jsonwebtoken');

exports.VIEW_item_ingredients = (req, res, next) => {
    console.log("hi-chef view item ingredients");
    try {
        conn.query(VIEW_ITEM_INGREDIENTS,[req.body.item_id],(err,data,feild)=>{

            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    item_ingredients:data
                })
            }

        })
    } catch ( err ) {

    }
}
