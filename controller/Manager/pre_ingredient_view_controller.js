const { isEmpty } = require('../../utils/is_empty');
const conn = require('../../service/db_service');
const {
    VIEW_PRE_INGRE_LIST
} = require('../../query/Manager/view_pre_ingre_list');
const { PEDIATRICIAN_MODEL } = require('../../model/Pediatrician/view_article');
const bcrypt = require('bcryptjs');
const AppError = require('../../utils/appError');
const JWT = require('jsonwebtoken');

exports.VIEW_pre_ingre_list = (req, res, next) => {
    console.log("hi",req);
    try {
        conn.query(VIEW_PRE_INGRE_LIST,[req.params.user_id],(err,data,feild)=>{

            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    Not_Accepted_Ingredient_List:data
                })
            }

        })
    } catch ( err ) {

    }
}
