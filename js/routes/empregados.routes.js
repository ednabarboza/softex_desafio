const express = require('express');
const router = express.Router();
const { getEmployees, getEmployee, createEmployees, updateEmployess, deleteEmployess } = require('../controllers/empregados.controller')

router.get('/empregados', getEmployees);

router.get('/empregados/:id', getEmployee);

router.post('/empregados', createEmployees);

router.put('/empregados/:id', updateEmployess);

router.delete('/empregados/:id', deleteEmployess);


module.exports = router;