import mongoose from "mongoose";


export const dbConnection = () => {
    if (!process.env.MONGO_URI) {
        console.log("Mongo URI is not defined in environment variables!");
        return;  // Exit if the URI is not defined
      }
    
      console.log("Mongo URI:", process.env.MONGO_URI);  // Log the URI to verify it's loaded correctly
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "RESERVATIONS",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log(`Some error occured while connecing to database: ${err}`);
    });
};