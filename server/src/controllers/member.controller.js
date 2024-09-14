const memberModel = require("../../models/member.model");

const getAllFacultyMembers = async (req, res) => {
  try {
    const data = await memberModel.find({});
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const addFacultyMember = async (req, res) => {
  try {
    const data = await memberModel.create({ ...req.body });
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const deleteFacultyMember = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await memberModel.findByIdAndDelete({ _id: id });
    res.status(201).json({data});
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const updateFacultyMember= async (req, res) => {
    try {
      const id = req.params.id;
      const newData = req.body
      const data = await memberModel.findByIdAndUpdate({ _id: id },newData,{new: true});
      res.status(201).json(data);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  };

module.exports = {
  getAllFacultyMembers,
  addFacultyMember,
  deleteFacultyMember,
  updateFacultyMember,
};
