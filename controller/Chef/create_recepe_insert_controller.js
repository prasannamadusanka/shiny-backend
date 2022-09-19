// const { isEmpty } = require('../../utils/is_empty');
// const conn = require('../../service/db_service');
// const {
//   INSERT_CREATE_RECEPE
// } = require('../../query/Chef/insert_create_recepe');
// const { PEDIATRICIAN_MODEL } = require('../../model/Pediatrician/view_article');
// const bcrypt = require('bcryptjs');
// const AppError = require('../../utils/appError');
// const JWT = require('jsonwebtoken');

// exports.INSERT_create_recepe = (req, res, next) => {
//     console.log("hi-chef insert create recepe");
//     console.log(req.body);
//     try {
//         conn.query(INSERT_CREATE_RECEPE,[req.body.name,req.body.type,req.body.description,req.body.image,req.body.chef_tips],(err,data,feild)=>{

//             if(err){
//                 return next(new AppError(err))
//             }
//             else{
//                 res.status(200).json({
//                     create_recepe:data
//                 })
//             }

//         })
//     } catch ( err ) {

//     }
// }

const { isEmpty } = require('../../utils/is_empty');
const conn = require('../../service/db_service');
const { 
    INSERT_CREATE_RECEPE 
} = require('../../query/chef/insert_create_recepe');

//const {Add_Event_Record} = require('../../model/cient/event');
const bcrypt = require('bcryptjs');
const AppError = require('../../utils/appError');
const JWT = require('jsonwebtoken');


exports.insert_recepe = (req, res, next) => {
    console.log(req.body)
    
    // if (isEmpty(req.body)) return next(new AppError("form data not found", 400));

    try {
        //const { error } = Add_Event_Record.validate(req.body);
        
      //  if (error) return next(new AppError(error.details[0].message, 400));

     
        // try {
            conn.query(INSERT_CREATE_RECEPE, [req.body.name,req.body.type,req.body.description,req.body.image,req.body.chef_tips], (err, data, feilds) => {
                if (err) return next(new AppError(err, 500));
                res.status(201).json({
                    recepe_data : data
                })
            })
        // } catch (err){
        //     console.log("errors")
        // }


    } catch (err) {
        res.status(500).json({
            error: err
        })
    }
}
