const asyncHandler =(reqHandler)=>{
    (req,res,next)=>{
        Promise.resolve(reqHandler(req,res,next)).
        catch((err)=>next(err))
    }

}



export {asyncHandler};

// const asynchandler=()=>{}
// const asynchandler=(fn)=>()=>{}
// const asynchandler=(fn)=>async()=>{}




// const asynchandler =(fn)=>async(req,res,next)=>{
//     try {
//         await fn(req,res,next)
//     } catch (err) {
//         res.status(err.code||500).json({
//             success:false,
//             message:err.message
//         })
//     }
// }