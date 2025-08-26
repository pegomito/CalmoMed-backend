const OccupancyReport = require('../models/OccupancyReportsModel');

const get = async (req, res) => {
  try {
    const reports = await OccupancyReport.findAll();
    res.status(200).json(reports);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const create = async (req, res) => {
  try {
    const report = await OccupancyReport.create(req.body);
    res.status(201).json(report);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const report = await OccupancyReport.findByPk(id);
    if (!report) return res.status(404).json({ message: 'Relatório não encontrado' });
    Object.assign(report, req.body);
    await report.save();
    res.json(report);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const destroy = async (req, res) => {
  try {
    const { id } = req.params;
    const report = await OccupancyReport.findByPk(id);
    if (!report) return res.status(404).json({ message: 'Relatório não encontrado' });
    await report.destroy();
    res.json({ message: 'Relatório removido' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = { get, create, update, destroy };
