import express, { Request, Response, NextFunction } from 'express';
import fs from 'fs';
import path from 'path';
const LOG_DIR = process.env.LOG ?? './logs';
const dir = `${__dirname}/../../logs`;

const logger = (form: 0 | 1) => (req: Request, res: Response, next: NextFunction) => {
    const logSimple = `${new Date().toISOString() + " " + req.url + " " + req.method}\n`;
    const logComplete = `${new Date().toISOString() + " " +req.url+ " " + req.method+ " " + req.httpVersion+ " " + req.get('User-Agent')}\n`;
    const logFile = form === 0 ? 'logs_simples.txt' : 'logs_completos.txt';
    const logData = form === 0 ? logSimple : logComplete;

    const logFilePath = path.join(dir, logFile);

    fs.appendFile(logFilePath, logData, (err) => {
        if (err) {
            console.error('Error ao escrever log:', err);
        }
    });

    next();
};

export default logger;