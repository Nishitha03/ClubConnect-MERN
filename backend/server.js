import app from "./app.js";

/*app.listen(process.env.PORT,  ()=>{
     console.log('Server Running On Port ${process.env.PORT}');
});
const express = require('express');
const app = express();*/

// Set the port
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server Running On Port ${PORT}`);
});

