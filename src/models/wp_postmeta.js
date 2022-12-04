import dbPool from '../config/database.js';

export const createPostmeta = (body) => {
  const SQLQuery = `INSERT INTO wp_postmeta (post_id, meta_key, meta_value) 
                    VALUES (${body.post_id}, '${body.meta_key}', '${body.meta_value}')`;

  return dbPool.execute(SQLQuery);
};
