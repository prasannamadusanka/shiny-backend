const { isEmpty } = require('../../utils/is_empty');
const conn = require('../../service/db_service');
const {
    VIEW_EVENT
} = require('../../query/Manager/view_event');
const { PEDIATRICIAN_MODEL } = require('../../model/Pediatrician/view_article');
const bcrypt = require('bcryptjs');
const AppError = require('../../utils/appError');
const JWT = require('jsonwebtoken');

exports.VIEW_event = (req, res, next) => {
    console.log("hi");
    try {
        conn.query(VIEW_EVENT,[req.body.banquet_id],(err,data,feild)=>{

            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    event:data
                })
            }

        })
    } catch ( err ) {

    }
}
