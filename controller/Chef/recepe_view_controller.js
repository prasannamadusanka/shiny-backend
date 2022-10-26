const { isEmpty } = require('../../utils/is_empty');
const conn = require('../../service/db_service');
const {
    VIEW_RECEPE
} = require('../../query/Chef/view_recepe');
const { PEDIATRICIAN_MODEL } = require('../../model/Pediatrician/view_article');
const bcrypt = require('bcryptjs');
const AppError = require('../../utils/appError');
const JWT = require('jsonwebtoken');

exports.VIEW_recepe= (req, res, next) => {
    console.log("hi-chef view recepe");
    console.log(req.query.item_id);
    try {
        conn.query(VIEW_RECEPE,[req.query.item_id],(err,data,feild)=>{

            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    recepe:data
                })
            }

        })
    } catch ( err ) {

    }
}
