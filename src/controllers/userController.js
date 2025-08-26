const User = require('../models/UsersModel');
const bcrypt = require('bcryptjs');

const get = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const create = async (req, res) => {
  try {
    const { name, email, password, cpf, role } = req.body;
    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hash, cpf, role });
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, cpf, role } = req.body;
    const user = await User.findByPk(id);
    if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });
    Object.assign(user, { name, email, cpf, role });
    await user.save();
    res.json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const destroy = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });
    await user.destroy();
    res.json({ message: 'Usuário removido' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = { get, create, update, destroy };
