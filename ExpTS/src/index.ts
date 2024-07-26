import express, { Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

import router from '../router/router';

dotenv.config();
const PORT = process.env.PORT ?? 3333;
const LOG_DIR = process.env.LOG ?? './logs';
const app = express();


app.use(router);

if (!fs.existsSync(LOG_DIR)) {
    console.log("NÃO EXISTE DIRETÓRIO ESPECIFICADO, CRIANDO...\n");
    fs.mkdirSync(LOG_DIR);
}

const logMiddleware = (form: 0 | 1) => (req: Request, res: Response, next: NextFunction) => {
    const logSimple = `${new Date().toISOString() + " " + req.url + " " + req.method}\n`;
    const logComplete = `${new Date().toISOString() + " " +req.url+ " " + req.method+ " " + req.httpVersion+ " " + req.get('User-Agent')}\n`;
    const logFile = form === 0 ? 'logs_simples.txt' : 'logs_completos.txt';
    const logData = form === 0 ? logSimple : logComplete;

    const logFilePath = path.join(LOG_DIR, logFile);

    fs.appendFile(logFilePath, logData, (err) => {
        if (err) {
            console.error('Error ao escrever log:', err);
        }
    });

    next();
};

app.use(logMiddleware(1));

app.use(morgan('short'));

app.listen(PORT, () => {
    console.log(`Express app iniciada na porta ${PORT}.`);
});
