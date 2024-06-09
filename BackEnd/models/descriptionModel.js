const { db } = require("../config/db");

const getDescriptionById = async (id) => {
  try {
    const query =
      "SELECT U.name, D.description, D.prescription FROM users U JOIN description D ON U.id = D.userd_id WHERE U.id = $1;";
    const { rows } = await db.query(query, [id]);
    return rows;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const createDescription = async (description, prescription, userId) => {
    try{
        const query = 'INSERT INTO description (description, prescription, userd_id) VALUES ($1, $2, $3) RETURNING *;'
        const {rows} = await db.query(query, [description, prescription, userId]);
        return rows[0];
    }catch(error){
        console.log(error);
        throw new Error(error);
    }
}

module.exports = { getDescriptionById, createDescription };
