
/*

instalando type script
~ npm i -D typescript @types/express @types/node ts-node

iniciando configs de ts
~ npx tsc --init

*/

import express, { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3333;

/*
app.get("/", (req: Request, res: Response) => {
	res.send("Hello world!:D");
});

app.listen(PORT, () => {
	console.log(`Express app iniciada na porta ${PORT}.`);
});
*/

app.use((req: Request, res: Response, next: NextFunction) => {
	console.log(`Requisição ${req.method} ${req.url}`);
	next();
});

app.get("/", (req, res) => {
	res.send("Hello world!");
});

app.listen(PORT, () => {
	console.log(`Express app iniciada na porta ${PORT}.`);
});