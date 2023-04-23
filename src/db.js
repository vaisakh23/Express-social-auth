const mongoose = require("mongoose")

mongoose.connect(process.env.MD_URL)
  .then((info) => console.log("Db connected"))
  .catch((err) => console.log(err))