require("dotenv").config();
const OpenAI = require("openai");

async function getResponseChat(req, res) {
  const { prompt } = req.body;
  const openai = new OpenAI(process.env.OPENAI_API_KEY);
  try {
    const stream = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are a expert doctor, able to identify all diseases. You can answer any question related to medicine",
        },
        { role: "user", content: prompt },
      ],
      stream: true,
    });

    let responseText = "";
    for await (const chunk of stream) {
      responseText += chunk.choices[0]?.delta?.content || "";
    }
    return res.json({ response: responseText });
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}

module.exports = { getResponseChat };
