const express = require("express");
const app = express();
const userRouter = require("./routes/userRoutes");
const noteRouter = require("./routes/notesRoutes");
const mongoose = require("mongoose");


app.use(express.json());

app.use("/users",userRouter);
app.use("/note",noteRouter);

app.get("/",(req,res)=>{
    res.send("HELLO!")
});


mongoose.connect("mongodb+srv://nikhil1609sharma:qwerty7838@cluster0.e8qth.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    app.listen(8000,()=>{
        console.log("Server Started at port 8000");
    })
})
.catch((error)=>{
    console.log(error+"  ERRROOORR")
})

