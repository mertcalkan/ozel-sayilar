var express = require("express"),
      
      app = express();  
//Routes

const indexRoutes = require("./routes/indexRoutes");

//App Config
app.set("view engine" , "ejs");
app.use(express.static("public"));
// Routes using
app.use(indexRoutes);

const server = app.listen(process.env.PORT ,(err)=>{
    if(err){
        console.log(err);
    }
        console.log("App started.Port number %d:" , server.address().port)


});
      

