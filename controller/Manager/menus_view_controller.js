const { isEmpty } = require('../../utils/is_empty');
const conn = require('../../service/db_service');
const {
    VIEW_MENUS
} = require('../../query/Manager/view_menus');
const { PEDIATRICIAN_MODEL } = require('../../model/Pediatrician/view_article');
const bcrypt = require('bcryptjs');
const AppError = require('../../utils/appError');
const JWT = require('jsonwebtoken');

exports.VIEW_menus = (req, res, next) => {
    console.log("hi");
    try {
        conn.query(VIEW_MENUS,[req.body.banquet_id],(err,data,feild)=>{

            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    menu:data
                })
            }

        })
    } catch ( err ) {

    }
}
