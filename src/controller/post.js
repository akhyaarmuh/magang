import postModels from '../models/wp_posts.js';

export const createPost = async (req, res) => {
  const { body } = req;

  try {
    await postModels.createPost(body);
    res.status(201).json({ message: 'Berhasil menambah post baru' });
  } catch (error) {
    res.status(500).json({
      message: error.message || 'Server error',
      error,
    });
  }
};

export const getAllPost = async (req, res) => {
  try {
    const [data] = await postModels.getAllPost();
    res.json({ data });
  } catch (error) {
    res.status(500).json({
      message: error.message || 'Server error',
      error,
    });
  }
};

export const getPost = async (req, res) => {
  const { id } = req.params;

  try {
    const [data] = await postModels.getPost(id);
    res.json({ data: data[0] });
  } catch (error) {
    res.status(500).json({
      message: error.message || 'Server error',
      error,
    });
  }
};

export const updatePost = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  try {
    await postModels.updatePost(id, body);
    res.json({ message: 'Post berhasil diperbarui' });
  } catch (error) {
    res.status(500).json({
      message: error.message || 'Server error',
      error,
    });
  }
};

export const deletePost = async (req, res) => {
  const { id } = req.params;

  try {
    await postModels.deletePost(id);
    res.json({ message: 'Post berhasil dihapus' });
  } catch (error) {
    res.status(500).json({
      message: error.message || 'Server error',
      error,
    });
  }
};

export default { createPost, getAllPost, getPost, updatePost, deletePost };
