const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

async function getResponseChatGemini(req, res) {
  const { prompt } = req.body;

  // Craft a specific prompt with persona instructions
  const adjustedPrompt = `Answer like you are the best financial advisor in the world, providing the best advice and most helpful information. Keep your answer as short as possible while giving al the information necessary ${prompt}`;

  const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  try {
    const result = await model.generateContent(adjustedPrompt, {
      temperature: 1.2,
    }); // Adjust temperature as needed
    const response = await result.response;
    const text = response.text();
    return res.json({ response: text });
  } catch (error) {
    console.error(error);
  }
}

module.exports = { getResponseChatGemini };
