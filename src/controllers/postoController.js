const Posto = require('../models/PostosModel');

const get = async (req, res) => {
  try {
    const postos = await Posto.findAll();
    res.status(200).json(postos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const create = async (req, res) => {
  try {
    const posto = await Posto.create(req.body);
    res.status(201).json(posto);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const posto = await Posto.findByPk(id);
    if (!posto) return res.status(404).json({ message: 'Posto não encontrado' });
    Object.assign(posto, req.body);
    await posto.save();
    res.json(posto);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const destroy = async (req, res) => {
  try {
    const { id } = req.params;
    const posto = await Posto.findByPk(id);
    if (!posto) return res.status(404).json({ message: 'Posto não encontrado' });
    await posto.destroy();
    res.json({ message: 'Posto removido' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = { get, create, update, destroy };
