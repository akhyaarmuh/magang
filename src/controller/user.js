import jwt from 'jsonwebtoken';

export const createUser = (req, res) => {
  const { body } = req;
  res.status(201).json({ message: 'Berhasil menambah user', data: body });
};

export const getAllUser = (req, res) => {
  const users = [
    { id: 1, name: 'saya', address: 'disana' },
    { id: 2, name: 'dia', address: 'dimana' },
    { id: 3, name: 'kamu', address: 'disini' },
  ];
  res.json({ data: users });
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const { body } = req;
  res.json({ message: 'User berhasil di perbarui', data: { id, ...body } });
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  res.json({ message: 'User berhasil di hapus' });
};

export const login = async (req, res) => {
  // const { body } = req;

  const token = jwt.sign({}, process.env.TOKEN, {
    expiresIn: '1d',
  });
  res.json({ token });
};

export default {
  createUser,
  getAllUser,
  updateUser,
  deleteUser,
  login,
};
