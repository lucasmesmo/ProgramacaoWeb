import express, { Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import fs from 'fs';
import { engine } from 'express-handlebars';

import router from './router/router';
import logger from './middlewares/logger'

dotenv.config();

const app = express();
const PORT = process.env.PORT ?? 3333;


app.engine("handlebars", engine({ helpers: require(`${__dirname}/views/helpers/helpers.ts`)}));
app.set("view engine", "handlebars");
app.set("views", `${__dirname}/views`);

//exercicio 3
/*
if (!fs.existsSync(LOG_DIR)) {
    console.log("NÃO EXISTE DIRETÓRIO ESPECIFICADO, CRIANDO...\n");
    fs.mkdirSync(LOG_DIR);
}
*/
app.use(logger(1));

app.locals.valor = "10";
app.use(express.urlencoded({ extended: false }));
app.use(router);

const publicPath = `${process.cwd()}`;

app.use('/inf', (req, res) => {
    res.send(publicPath);
})

app.use('/css', express.static(`${publicPath}/public/css`));
app.use('/js', express.static(`${publicPath}/public/js`));
app.use('/img', express.static(`${publicPath}/public/img`));

app.engine("handlebars", engine({
    helpers: require(`${__dirname}/views/helpers/helpers.ts`)
}));

app.use(morgan('short'));

app.listen(PORT, () => {
    console.log(`Express app iniciada na porta ${PORT}.`);
});
