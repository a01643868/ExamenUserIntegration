const { db } = require("../config/db");

const getFeedbackById = async (id) => {
  try {
    const query =
      "SELECT U.name, F.feedback FROM users U JOIN feedback F ON U.id = F.userd_id WHERE U.id = $1;";
    const { rows } = await db.query(query, [id]);
    return rows;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const createFeedback = async(feedback, userID) => {
    try{
        const query = "INSERT INTO feedback (feedback, userd_id) VALUES ($1, $2) RETURNING *;"
        const {rows} = await db.query(query, [feedback, userID]);
        return rows[0];
    }catch(error){
        console.log(error)
        throw new Error(error);
    }
}

module.exports = { getFeedbackById, createFeedback };
