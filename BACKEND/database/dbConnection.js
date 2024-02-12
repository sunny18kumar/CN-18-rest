import mongoose from "mongoose";

 export  const dbConnection =() =>{
    mongoose
    .connect(process.env.MONGO_URI, { 
        
    })
    .then(( ) => {
        console.log("Connected to database successfully !");
    }).catch(err => {
        console.log (`some error while connecting to database !${ err}` );
    })
}; 