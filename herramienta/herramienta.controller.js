const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('_middleware/validate-request');
const Role = require('_helpers/role');
const herramientaService = require('./herramienta.service');

// routes
router.get('/herramienta', getAll);
router.get('/herramienta/:id', getById);
router.post('/herramienta', createSchema, create);
router.put('/herramienta/:id', updateSchema, update);
router.delete('/herramienta/:id', _delete);

module.exports = router;

// route functions

function getAll(req, res, next) {
    herramientaService.getAll()
        .then(herramientas => res.json(herramientas))
        .catch(next);
}

function getById(req, res, next) {
    herramientaService.getById(req.params.id)
        .then(herramienta => res.json(herramienta))
        .catch(next);
}

function create(req, res, next) {
    herramientaService.create(req.body)
        .then(() => res.json({ message: 'Herramienta created' }))
        .catch(next);
}

function update(req, res, next) {
    herramientaService.update(req.params.id, req.body)
        .then(() => res.json({ message: 'Herramienta updated' }))
        .catch(next);
}

function _delete(req, res, next) {
    herramientaService.delete(req.params.id)
        .then(() => res.json({ message: 'Herramienta deleted' }))
        .catch(next);
}

// schema functions

function createSchema(req, res, next) {
    const schema = Joi.object({
        ID: Joi.int().required(),
        Tipo: Joi.ENUM('Hardware', 'Software').required(),
        Nombre: Joi.string().required(),
    });
    validateRequest(req, next, schema);
}

function updateSchema(req, res, next) {
    const schema = Joi.object({
        
        ID: Joi.int().empty(''),
        Tipo: Joi.ENUM('Hardware', 'Software').empty(''),
        Nombre: Joi.string().empty(''),
    });
    validateRequest(req, next, schema);
}