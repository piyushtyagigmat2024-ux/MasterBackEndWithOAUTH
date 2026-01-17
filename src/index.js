import app from "./app.js";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: "./.env"
});

const PORT = process.env.Port || 8000; 

connectDB()
        .then(()=>{
            app.listen(PORT, ()=> console.log(`Server is running on Port:${PORT}`));
        })
        .catch((error)=>{
            console.error("Mongoodb Connection error", err)
        });




