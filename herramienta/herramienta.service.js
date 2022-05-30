const bcrypt = require('bcryptjs');
const db = require('_helpers/db');

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

async function getAll() {
    return await db.Herramienta.findAll();
}

async function getById(id) {
    return await getHerramienta(id);
}

async function create(params) {
    // validate
    if (await db.Herramienta.findOne({ where: { email: params.email } })) {
        throw 'Email "' + params.email + '" is already registered';
    }

    const herramienta = new db.Herramienta(params);
    
    // hash password
    herramienta.passwordHash = await bcrypt.hash(params.password, 10);

    // save herramienta
    await herramienta.save();
}

async function update(id, params) {
    const herramienta = await getHerramienta(id);

    // validate
    const emailChanged = params.email && herramienta.email !== params.email;
    if (emailChanged && await db.Herramienta.findOne({ where: { email: params.email } })) {
        throw 'Email "' + params.email + '" is already registered';
    }

    // hash password if it was entered
    if (params.password) {
        params.passwordHash = await bcrypt.hash(params.password, 10);
    }

    // copy params to herramienta and save
    Object.assign(herramienta, params);
    await herramienta.save();
}

async function _delete(id) {
    const herramienta = await getHerramienta(id);
    await herramienta.destroy();
}

// helper functions

async function getHerramienta(id) {
    const herramienta = await db.Herramienta.findByPk(id);
    if (!herramienta) throw 'Herramienta not found';
    return herramienta;
}
