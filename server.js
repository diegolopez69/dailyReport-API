const { exec } = require("child_process");

require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:3001"
};

app.use(cors('*'));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
const Role = db.role;
console.log('WE ARE CONNECTING TO DB');
db.sequelize.sync({ alter: true })
  .then(() => {
    console.log('We are connected');
    exec("npm run seed", (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
      }
      console.log(`stdout: ${stdout}`);


      // simple route
      app.get("/", (req, res) => {
        res.json({ message: "Welcome to api of Daily reports." });
      });

      require("./app/routes/tool.routes")(app);
      require("./app/routes/computer.routes")(app);
      require("./app/routes/classroom.routes")(app);
      require("./app/routes/inventory.routes")(app);
      require('./app/routes/auth.routes')(app);
      require('./app/routes/user.routes')(app);
      require('./app/routes/checkups.routes')(app);
      require('./app/routes/reports.routes')(app);

      // set port, listen for requests
      const PORT = process.env.PORT || 3000;
      app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}.`);
      });
    });


  }).catch(e => {
    console.log('The following error occured while conecting: ', e);
  })

/*This is to drop the data on the db */
// db.sequelize.sync({force: true}).then(() => { console.log('Drop and Resync Db'); });
