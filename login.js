

connection.connect(function(error){
    if (error) throw error
    else console.log("connected to the database!")
});

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req,res){
    console.log(req);
    var username = res.username;
    var password = res.password;
    connection.query("select * from loginuser where user_username = ? and user_password = ?",[username, password], function(error, results, fields){
        if (results.length > 0) {
            res.redirect("/welcome");
        } else {
            res.redirect("/");
        }
        res.end()
    })
})

app.get("/welcome",function(req,res){
    res.sendFile(__dirname + "/welcome.html")
})

//app.listen(3001);