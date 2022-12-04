import dbPool from '../config/database.js';

export const createPost = (body) => {
  const SQLQuery = `INSERT INTO wp_posts (title, content) 
                    VALUES ('${body.title}', '${body.content}')`;

  return dbPool.execute(SQLQuery);
};

export const getAllPost = () => {
  const SQLQuery = 'SELECT * FROM wp_posts';

  return dbPool.execute(SQLQuery);
};

export const getPost = (id) => {
  const SQLQuery = `SELECT * FROM wp_posts WHERE id = ${id}`;

  return dbPool.execute(SQLQuery);
};

export const updatePost = (id, body) => {
  const SQLQuery = `UPDATE wp_posts 
                    SET title='${body.title}', 
                        content='${body.content}'
                    WHERE id = ${id}`;

  return dbPool.execute(SQLQuery);
};

export const deletePost = (id) => {
  const SQLQuery = `DELETE FROM wp_posts WHERE id = ${id}`;

  return dbPool.execute(SQLQuery);
};

export default { createPost, getAllPost, getPost, updatePost, deletePost };
