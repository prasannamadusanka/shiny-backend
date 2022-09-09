const { isEmpty } = require('../../utils/is_empty');
const conn = require('../../service/db_service');
const {
  VIEW_RECEPES
} = require('../../query/Chef/view_recepes');
const { PEDIATRICIAN_MODEL } = require('../../model/Pediatrician/view_article');
const bcrypt = require('bcryptjs');
const AppError = require('../../utils/appError');
const JWT = require('jsonwebtoken');

exports.VIEW_recepes = (req, res, next) => {
    console.log("hi-chef view recepes");
    try {
        conn.query(VIEW_RECEPES,(err,data,feild)=>{

            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    recepes:data
                })
            }

        })
    } catch ( err ) {

    }
}
