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
        title: Joi.string().required(),
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        role: Joi.string().valid(Role.Admin, Role.Herramienta).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required(),
        confirmPassword: Joi.string().valid(Joi.ref('password')).required()
    });
    validateRequest(req, next, schema);
}

function updateSchema(req, res, next) {
    const schema = Joi.object({
        title: Joi.string().empty(''),
        firstName: Joi.string().empty(''),
        lastName: Joi.string().empty(''),
        role: Joi.string().valid(Role.Admin, Role.Herramienta).empty(''),
        email: Joi.string().email().empty(''),
        password: Joi.string().min(6).empty(''),
        confirmPassword: Joi.string().valid(Joi.ref('password')).empty('')
    }).with('password', 'confirmPassword');
    validateRequest(req, next, schema);
}
