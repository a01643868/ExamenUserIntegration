const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3000;

const userRoutes = require("./routes/userRoutes");
const feedbackRoutes = require("./routes/feedbackRoutes");
const descriptionRoutes = require("./routes/descriptionRoutes");
const chatRoutes = require("./routes/chatRoutes");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ info: "Hello World! from Node, Express and PostgreSQL" });
});

app.listen(port, () => {
  console.log("Example app listening at http://localhost:3000");
});

app.use("/users", userRoutes);
app.use("/feedback", feedbackRoutes);
app.use("/description", descriptionRoutes);
app.use("/chat", chatRoutes);