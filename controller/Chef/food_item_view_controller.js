const { isEmpty } = require('../../utils/is_empty');
const conn = require('../../service/db_service');
const {
    VIEW_ITEMS
} = require('../../query/Chef/view_items');
const { PEDIATRICIAN_MODEL } = require('../../model/Pediatrician/view_article');
const bcrypt = require('bcryptjs');
const AppError = require('../../utils/appError');
const JWT = require('jsonwebtoken');

exports.VIEW_items = (req, res, next) => {
    console.log("hi-chef view items");
    try {
        conn.query(VIEW_ITEMS,(err,data,feild)=>{

            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    items:data
                })
            }

        })
    } catch ( err ) {

    }
}
