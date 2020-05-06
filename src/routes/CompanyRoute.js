const express = require('express');
const router = express.Router();
const CompanyController = require('../controllers/CompanyController')
router.get('/list', CompanyController.list);
router.post('/create', CompanyController.create);
router.get('/get/:id', CompanyController.get);
router.post('/update/:id', CompanyController.update);
router.post('/delete', CompanyController.delete);
module.exports = router;