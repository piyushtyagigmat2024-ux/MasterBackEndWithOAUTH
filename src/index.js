import app from "./app.js";
import connectDB from "./db/index.js";
import dotenv from 'dotenv';

dotenv.config({ path: '../.env' })

const PORT = process.env.Port || 8000; 

connectDB()
        .then(()=>{
            app.listen(PORT, ()=> console.log(`Server is running on Port:${PORT}`));
        })
        .catch((error)=>{
            console.error("Mongoodb Connection error", err)
        });




