const express = require("express");
const userRoute = require("./routes/userRoutes");

const app = express();

app.use("/api/v1", userRoute);

app.listen(5500, (req, res) => {
  console.log(`server running at port no:5500`);
});
