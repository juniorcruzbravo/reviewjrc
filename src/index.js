const express=require('express');
const app= express();
const cors= require('cors');
const path=require('path');
const indexRoutes=require('./routes/index');

//settings
app.set('views',path.join(__dirname,'client'));
app.set('port',process.env.PORT||3000);
app.engine('html',require('ejs').renderFile);
app.set('view engine','ejs');
app.use(express.static(__dirname+'/client'));

//midleware
app.use(cors());

//routes
app.use(indexRoutes);

app.listen(app.get('port'),()=>{
    console.log("reder");
});