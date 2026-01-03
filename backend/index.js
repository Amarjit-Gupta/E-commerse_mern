const express = require("express");
const Data = require("./connect.js");
const cors = require("cors");
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
  res.json({
    serverTime: Date.now()
  });
});

app.post("/", async (req, res) => {
  try {
    let result = new Data(req.body);
    let data = await result.save();
    console.log(data);
    res.status(200).json({ data });
  }
  catch (err) {
    res.status(400).json({ message: "something went wrong" });
  }
});

app.get("/data", async (req, res) => {
  try {
    let result = await Data.find({});
    console.log(result);
    res.status(200).json({ result });
  }
  catch (err) {
    res.status(400).json({ message: "something went wrong" });
  }
});

app.listen(PORT, console.log(`Server is running on PORT ${PORT}`));
