
// Middle wares is used for write an error message its should be in that format must

const error_Message = (err,req,res,next)=>{
    res.json({
        error:err.message,
    })
}


module.exports = error_Message