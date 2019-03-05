import UserModel from '../models/UserModel';
import usersToInsert from '../mockUsers';

const insertMockUsers = async (req, res) => {
  try {
    await UserModel.insertMany(usersToInsert);
    res.status(201).json({
      message: 'Mock users has been inserted',
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server error',
      error: error.message,
    });
  }
};

const createUser = async (req, res) => {
  const newCity = new UserModel(req.body);

  try {
    const insertedUser = await newCity.save();
    res.status(201).json({
      message: 'User has been created',
      data: insertedUser.result,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server error',
      error: error.message,
    });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find({});

    res.status(200).json({
      message: 'Users received',
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server error',
      error: error.message,
    });
  }
};

const getUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await UserModel.findById(id);

    res.status(200).json({
      message: 'User received',
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server error',
      error: error.message,
    });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    await UserModel.findByIdAndRemove(id);

    res.status(200).json({
      message: 'User successfully deleted',
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server error',
      error: error.message,
    });
  }
};

export default {
  insertMockUsers,
  createUser,
  getAllUsers,
  getUser,
  deleteUser,
};
