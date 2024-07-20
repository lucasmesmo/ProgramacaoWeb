/*

instalando type script
~ npm i -D typescript @types/express @types/node ts-node

iniciando configs de ts
~ npx tsc --init

*/

const express = require("express");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3333;

app.get("/", (req, res) => {
    res.send("Hello world!");
});

app.listen(PORT, () => {
    console.log(`Express app iniciada na porta ${PORT}.`);
});