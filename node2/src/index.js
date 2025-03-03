/*
TUDO USANDO WSL2 - ubuntu 20.04.6

Intalar nvm:
~ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
~ nvm --version

talvez (não testei):

~ apt install npm

instalar node:

~ nvm install node
~ node --version

Instalar lts:
~ nvm install --lts

Primeiro passo no desenvolvimento de uma aplicação node.js:
~ npm init
ou
~ npm init -y

Incluindo express no projeto:
~ npm install express

Alguns módulos embarcados do Node.js: http, url, path, fs, os, sys, tty, cluster, process, timers e util
– fs.access(): verifica se o arquivo existe
– fs.chmod(): muda as permissos de acesso do arquivo
– fs.close(): fecha um descritor de arquivo
– fs.copyFile(): copia um arquivo
– fs.mkdir(): cria um novo diretório
– fs.open(): abre um arquivo para leitura
– fs.readdir(): lê o conteúdo de um diretório
– fs.readFile(): lê o conteúdo de um arquivo
– fs.symlink(): cria um link simbólico
– fs.unlink(): apaga um arquivo ou link
– fs.writeFile(): escreve dados em um arquivo

req – objeto representando a requisição do usuário.
res – objeto representando a resposta enviada para o usuário.

Mostra os processos em portas?
~ sudo lsof -i -P -n | grep LISTEN


let icomp = "Instituto de Computação";
console.log(strHelper.upper(icomp));
console.log(strHelper.lower(icomp));

instalando dotenv:
~ npm install dotenv

instalar nodemon:
~ npm install nodemon --save-dev
*/



import { createLink_2 } from './util.js';
import { createServer } from 'http'
import { promises as fsPromises } from 'fs';

import {config} from "dotenv";

//const strHelper = require('./str_helper.js');

config({ path: `.env.${process.env.NODE_ENV}` })

const PORT = process.env.PORT ?? 8080;

const server = createServer(async function (req, res) {
    //res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    const directoryPath = process.argv[2]; // /home/lucasdarcio/home/usuario/projetos/pw/ProgramacaoWeb/node1
    
    try{

        if(req.url == '/'){
            const files = await fsPromises.readdir(directoryPath);
            res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
            for (const file of files){
                res.write(createLink_2(file));
                console.log(file);
            }
            res.end();
        }
        else{
            if (req.url === '/favicon.ico') {
                res.writeHead(204); // Sem conteúdo para favicon
                res.end();
                return;
            }
            const filePath = directoryPath+req.url;
            console.log("path:"+filePath);
            try {
                const data = await fsPromises.readFile(filePath, 'utf8');
                res.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
                res.write(`<a href="/">Voltar</a><br>\n`);
                res.write('<pre>'+data+'</pre>');
                res.end();
            } 
            catch (err) {
                console.error(`Error reading file: ${err.message}`);
                res.writeHead(404, {"Content-Type": "text/html;charset=utf-8"});
                res.write("File not found");
                res.end();
            }
        }
    }
    catch(err) {
        console.error(`Error reading directory: ${err.message}`);
        res.end();
    }
});
server.listen(PORT);
