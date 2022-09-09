const { isEmpty } = require('../../utils/is_empty');
const conn = require('../../service/db_service');
const {
  INSERT_CREATE_RECEPE
} = require('../../query/Chef/insert_create_recepe');
const { PEDIATRICIAN_MODEL } = require('../../model/Pediatrician/view_article');
const bcrypt = require('bcryptjs');
const AppError = require('../../utils/appError');
const JWT = require('jsonwebtoken');

exports.INSERT_CREATE_RECEPE = (req, res, next) => {
    console.log("hi-chef insert create recepe");
    console.log(req.body);
    try {
        conn.query(INSERT_CREATE_RECEPE,(err,data,feild)=>{

            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    general_event:data
                })
            }

        })
    } catch ( err ) {

    }
}
