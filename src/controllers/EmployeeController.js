const controllers = {}
var sequelize = require('../model/database');
var Employee = require('../model/Employee');
var Company = require('../model/Company');
sequelize.sync();

controllers.list = async (req, res) => {

  const data = await Employee.findAll({
      include: [Company]
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
    firstname,
    lastname,
    email,
    phone,
    company
  } = req.body;
  // create
  const data = await Employee.create({
      firstname: firstname,
      lastname: lastname,
      email: email,
      phone: phone,
      companyId: company
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
  const data = await Employee.findAll({
      where: {
        id: id
      },
      include: [Company]
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
    firstname,
    lastname,
    email,
    phone,
    company
  } = req.body;
  // Update data
  const data = await Employee.update({
      firstname: firstname,
      lastname: lastname,
      email: email,
      phone: phone,
      companyId: company
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
  const del = await Employee.destroy({
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