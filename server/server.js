
const express = require("express");
const bodyParser = require('body-parser');
//const cors = require("cors");
const path = require("path");
const app = express();
const mysql = require("mysql");
const db = mysql.createPool({
    host: "localhost",
    user: "admin",
    password: "password",
    database: "CRUDDataBase",
});
//app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

const buildPath = path.join(__dirname, '..', 'build');
app.use(express.static(buildPath));

//server-side routing because i suck and i can't route properly over client-side, fuck my life.
app.use('/home', function(req,res) {
    res.sendFile(path.join(__dirname,'..','build', 'index.html'));
});
app.use('/explore', function(req,res) {
    res.sendFile(path.join(__dirname,'..','build', 'index.html'));
});
app.use('/cultural-tourism', function(req,res) {
    res.sendFile(path.join(__dirname,'..','build', 'index.html'));
});
app.use('/leisure-tourism', function(req,res) {
    res.sendFile(path.join(__dirname,'..','build', 'index.html'));
});
app.use('/religious-tourism', function(req,res) {
    res.sendFile(path.join(__dirname,'..','build', 'index.html'));
});
app.use('/medical-tourism', function(req,res) {
    res.sendFile(path.join(__dirname,'..','build', 'index.html'));
});
app.use('/booking', function(req,res) {
    res.sendFile(path.join(__dirname,'..','build', 'index.html'));
});
app.use('/login', function(req,res) {
    res.sendFile(path.join(__dirname,'..','build', 'index.html'));
});
app.use('/about-us', function(req,res) {
    res.sendFile(path.join(__dirname,'..','build', 'index.html'));
});
app.use('/sign-up', function(req,res) {
    res.sendFile(path.join(__dirname,'..','build', 'index.html'));
});
app.use('/tos', function(req,res) {
    res.sendFile(path.join(__dirname,'..','build', 'index.html'));
});
app.use('/privacy-policy', function(req,res) {
    res.sendFile(path.join(__dirname,'..','build', 'index.html'));
});
//rant over, please continue..

const PORT = process.env.PORT || 5000;


// hotel-info get from database
app.get("/api/hotelinfo", (reg, res)=>{
    const sqlSelectHotel= "SELECT * FROM hotel_info";

    db.query(sqlSelectHotel, (err, result)  => {
        res.send(result);
    });
});
// tour-info get from database
app.get("/api/tourinfo", (reg, res)=>{
    const sqlSelectTour= "SELECT * FROM tour_info";

    db.query(sqlSelectTour, (err, result)  => {
        res.send(result);
    });
});
// member-info get from database
app.get("/api/memberinfo", (req, res)=>{
    const sqlSelectMember= "SELECT * FROM team_info";

    db.query(sqlSelectMember, (err, result)  => {
        res.send(result);
    });
});
// tourism-info get from database
app.get("/api/tourisminfo", (req, res)=>{
    const sqlSelectTourism= "SELECT * FROM tourism_info";

    db.query(sqlSelectTourism, (err, result)  => {
        res.send(result);
    });
});
// C_tourism-info GET
app.get("/api/ctourisminfo", (req, res)=>{
    const sqlSelectCTourism= "SELECT * FROM ctourism_info";

    db.query(sqlSelectCTourism, (err, result)  => {
        res.send(result);
    });
});
// L_tourism-info GET
app.get("/api/ltourisminfo", (req, res)=>{
    const sqlSelectLTourism= "SELECT * FROM ltourism_info";

    db.query(sqlSelectLTourism, (err, result)  => {
        res.send(result);
    });
});
// R_tourism-info GET
app.get("/api/rtourisminfo", (req, res)=>{
    const sqlSelectRTourism= "SELECT * FROM rtourism_info";

    db.query(sqlSelectRTourism, (err, result)  => {
        res.send(result);
    });
});
// M_tourism-info GET
app.get("/api/mtourisminfo", (req, res)=>{
    const sqlSelectMTourism= "SELECT * FROM mtourism_info";

    db.query(sqlSelectMTourism, (err, result)  => {
        res.send(result);
    });
});
// Booking_tour_slider_GET
app.get("/api/toursbookinginfo", (req, res)=>{
    const sqlSelectTourism= "SELECT * FROM toursbooking_info";

    db.query(sqlSelectTourism, (err, result)  => {
        res.send(result);
    });
});
//show sign-in data in api
app.get("/api/signup", (req, res) => {
    const sqlSelect = "SELECT * FROM user_info";

    db.query(sqlSelect, (err, result)  => {
        res.send(result);
    });
});
// sign-up post in database
app.post("/api/signup",(req, res)=> {
    const email_signup= req.body.user_email;
    const pw_signup= req.body.user_password;
    const user_signup = req.body.user_name;
    const sqlInsert = "INSERT INTO CRUDDataBase.user_info (user_email, user_password, user_name) VALUES (?,?,?)"
    
    db.query(sqlInsert, [email_signup, pw_signup, user_signup], (err, result)=>{
        console.log(result);
    });
});
// log-in check
app.post('/api/login', (req, res)=>{
    const email_signup= req.body.user_email;
    const pw_signup= req.body.user_password;
    const sqlInsert = "SELECT * FROM CRUDDataBase.user_info WHERE user_email= ? AND user_password = ?"
    
    db.query(sqlInsert, [email_signup, pw_signup], (err, result)=>{
        if(err){
            res.send({err: err})
        }

        if(result.length > 0){
            res.send(result);
        }else {
            res.send({message: "Wrong Email/Password"})
        }
    });
})




// terminal listening
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });
