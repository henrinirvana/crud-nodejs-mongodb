require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

//iniciando app
const app = express();
app.use(express.json());
app.use(cors());

//iniciando o banco de dados
/*
mongoose.connect(
    "mongodb://localhost:27017/nodeapi",
    { 
        useNewUrlParser: true,
        useUnifiedTopology:true
     }
);
*/
mongoose.connect(
    process.env.MONGO_URL,
    { 
        useNewUrlParser: true,
        useUnifiedTopology:true
     }
);

requireDir("./src/models");

//rotas
app.use("/api", require("./src/routes"));

app.listen(process.env.PORT || 3001);