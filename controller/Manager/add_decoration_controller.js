const { isEmpty } = require('../../utils/is_empty');
const conn = require('../../service/db_service');
const {
    ADD_DECORATION
} = require('../../query/Manager/add_decoration');
// const { PEDIATRICIAN_MODEL } = require('../../model/Pediatrician/view_article');
//const bcrypt = require('bcryptjs');
const AppError = require('../../utils/appError');
//const JWT = require('jsonwebtoken');

exports.ADD_decoration = (req, res, next) => {
    console.log("hi, Add decorations");
    console.log(req.body);
    if (isEmpty(req.body)) return next(new AppError("form data not found", 400));
    try {
        // conn.query(SPRR,[req.body], (err,data,fields)=>{
        conn.query(ADD_DECORATION,[req.body.deco_id, req.body.name, req.body.deco_type_id, req.body.description, req.body.image], (err,data,fields)=>{

            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    menus:data
                })
            }

        })
    } catch ( err ) {

    }
}