import mongoose from "mongoose";

export const dbConnection = ()=>{
     mongoose.connect(process.env.MONGO_URI, {
          dbName: "CLUB"
     })
     .then(() => {
          console.log("Connection to database successful")

     })
     .catch((err) => {
          console.log("Some error ${err}");
     });
};