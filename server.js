const express = require("express");
const cors = require("cors");
const app = express();

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));
 
// parse requests of content-type - application/json
app.use(express.json()); 

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
const Role = db.role;
//db.sequelize.sync();


/*This is to create the roles on the db */
db.sequelize.sync({force: true}).then(() => { //This line drop the db
  console.log('Drop and Resync Db');
  initial();
});
function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "moderator"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });
}


// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to api of Daily reports." });
});

require("./app/routes/herra.routes")(app);
require("./app/routes/ordenador.routes")(app);
require("./app/routes/aulas.routes")(app);
require("./app/routes/ordenador_aulas.routes")(app);
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
require('./app/routes/checkups.routes')(app);




// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
