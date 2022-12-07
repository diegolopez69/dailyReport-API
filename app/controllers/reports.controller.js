const db = require("../models");
const Classroom = db.tb_classrooms;
const Chromebook = db.tb_chromebook;
const Op = db.Sequelize.Op;
const { QueryTypes } = require("sequelize");

// Retrieve all classroom with the chromebook's
exports.chromebook = (req, res) => {
  const Nombre = req.query.Nombre;
  var condition = Nombre ? { Nombre: { [Op.like]: `%${Nombre}%` } } : null;
  Classroom.findAll({
    where: condition,
    include: [
      {
        model: Chromebook,
        attributes: ["Chromebook_id", "Estado", "No_sn", "No_armario"],
      },
    ],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).json({
        status: 500,
        Err: err.message || "Some error occurred while retrieving Computers.",
      });
    });
};

// Retrieve all funtionals and not funcionals chromebooks
exports.funtionalChromebooks = async (req, res) => {
  const numberOfTotalChromebooks = await db.sequelize.query(
    "SELECT COUNT(*) AS TotalChromebooks FROM `tb_chromebooks`",
    { type: db.sequelize.QueryTypes.SELECT }
  );

  const numberChromebookWorking = await db.sequelize.query(
    "SELECT COUNT(*) AS Total FROM `tb_chromebooks` WHERE Estado = 1",
    { type: db.sequelize.QueryTypes.SELECT }
  );

  const TotalChromebooks = numberOfTotalChromebooks[0].TotalChromebooks;
  const ChromebooksWorking = numberChromebookWorking[0].Total;
  const NoFuntionalChromebooks = TotalChromebooks - ChromebooksWorking;
  // console.table([TotalChromebooks, ChromebooksWorking, NoFuntionalChromebooks])
  
  if (ChromebooksWorking != null) {
    res.status(200).json({
      Funcional: ChromebooksWorking,
      No_funtional: NoFuntionalChromebooks,
    });
    return ChromebooksWorking;
  } else {
    res.status(500).json({
      status: 500,
      Err:
        err.message ||
        "Some error occurred while retrieving funtionals and non funtionals chromebooks.",
    });
  }
};

// Retrieve the count of how many keyboards has through the time
exports.keyboards = async (req, res) => {
  let keyboards = [20, 22, 17, 20];
  const getKeyboards = await db.sequelize.query(
    "SELECT COUNT(*) AS TotalKeyboards FROM `tb_tools` WHERE Nombre = 'Teclado'",
    { type: db.sequelize.QueryTypes.SELECT }
  );
  getKeyboardsModify = getKeyboards[0].TotalKeyboards;
  keyboards.push(getKeyboardsModify);

  if (keyboards != null) {
    res.status(200).json({
      ArrOfKeyboardsThroughTime: keyboards,
    });
    return keyboards;
  } else {
    res.status(500).json({
      status: 500,
      Err:
        err.message ||
        "Some error occurred while retrieving keyboards through time.",
    });
  }
};

// Retrieve the count of how many mouses has through the time
exports.mouses = async (req, res) => {
  let mouses = [20, 21, 26, 18, 15];
  const getMouses = await db.sequelize.query(
    "SELECT COUNT(*) AS TotalMouses FROM `tb_tools` WHERE Nombre = 'Raton'",
    { type: db.sequelize.QueryTypes.SELECT }
  );
  getMousesModify = getMouses[0].TotalMouses;
  mouses.push(getMousesModify);
  if (getMousesModify != null) {
    res.status(200).json({
      ArrOfMousesThroughTime: mouses,
    });
    return mouses;
  } else {
    res.status(500).json({
      status: 500,
      Err:
        err.message ||
        "Some error occurred while retrieving mouses through time.",
    });
  }
};

//Acá debe de utilizarse un cron Job
// Retrieve the count of how many computers has through the time
exports.computers = async (req, res) => {
  let computers = [123, 200, 350];
  const getComputers = await db.sequelize.query(
    "SELECT COUNT(*) AS TotalComputers FROM `tb_computers`",
    { type: db.sequelize.QueryTypes.SELECT }
  );
  getComputersModify = getComputers[0].TotalComputers;
  computers.push(getComputersModify);
  console.log("computers", computers);
  if (computers != null) {
    res.status(200).json({
      ArrOfComputersThroughTime: computers,
    });
    return computers;
  } else {
    res.status(500).json({
      status: 500,
      Err:
        err.message ||
        "Some error occurred while retrieving computers through time.",
    });
  }
};
