import {ApiResponse} from "../utils/api-response.js"

const healthCheack = (req, res)=>{
    res.status(200).json(
        new ApiResponse(200,{message:"Server is running"})
    )
}

export {healthCheack}