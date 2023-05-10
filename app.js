const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/buzz-routes");
const cors = require("cors");
const app = express();
const bodyParser = require('body-parser');

// Middlewares
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use("/orders", router); 

//Use below api's to check for given data
//http://localhost:3000/orders/create -------------------> create for given data
//http://localhost:3000/orders/update -------------------> update the by passing id and which you want to update
//http://localhost:3000/orders/list?date=2020/12/01 -----> list all order by given date
//http://localhost:3000/orders/search -------------------> update order by giving id
//http://localhost:3000/orders/delete/123 -------------------> delete order by mentioned id 


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

mongoose.connect("mongodb+srv://victorcalwin:ovyaz143@cluster0.gxl2jwr.mongodb.net/")
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));

  app.listen(3000, () => {
    console.log('Server is listening on port 3000');
  });
