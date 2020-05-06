const controllers = {}
var Employee = require('../model/Employee');
var Company = require('../model/Company');
var sequelize = require('../model/database');
sequelize.sync();
controllers.list = async (req, res) => {
  const data = await Company.findAll({

    })
    .then(function (data) {
      return data;
    })
    .catch(error => {
      return error;
    });

  res.json({
    success: true,
    data: data
  });

}
controllers.create = async (req, res) => {
  // data
  const {
    name,
    lastname,
    email,
    logo,
    website
  } = req.body;
  // create
  const data = await Company.create({
      name: name,
      logo: lastname,
      email: email,
      logo: logo,
      website: website
    })
    .then(function (data) {
      return data;
    })
    .catch(error => {
      console.log("Errorazo " + error)
      return error;
    })
  // return res
  res.status(200).json({
    success: true,
    message: "Guardo exitosamente",
    data: data
  });
}
controllers.get = async (req, res) => {
  const {
    id
  } = req.params;
  const data = await Company.findAll({
      where: {
        id: id
      },

    })
    .then(function (data) {
      return data;
    })
    .catch(error => {
      return error;
    })
  res.json({
    success: true,
    data: data
  });
}
controllers.update = async (req, res) => {
  // parameter get id
  const {
    id
  } = req.params;
  // parameter POST
  const {
    name,
    lastname,
    email,
    logo,
    website
  } = req.body;
  // Update data
  const data = await Company.update({
      name: name,
      logo: lastname,
      email: email,
      logo: logo,
      website: website

    }, {
      where: {
        id: id
      }
    })
    .then(function (data) {
      return data;
    })
    .catch(error => {
      return error;
    })
  res.json({
    success: true,
    data: data,
    message: "Updated successful"
  });
}
controllers.delete = async (req, res) => {
  // parameter post
  const {
    id
  } = req.body;
  // delete sequelize
  const del = await Company.destroy({
    where: {
      id: id
    }
  })
  res.json({
    success: true,
    deleted: del,
    message: "Deleted successful"
  });
}
module.exports = controllers;