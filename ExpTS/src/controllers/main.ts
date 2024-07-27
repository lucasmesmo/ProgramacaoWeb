import { Request, Response } from "express";
import { lore } from "../views/helpers/helpers";

const hb1 = (req: Request, res: Response) => {
    res.render('main/hb1', {
        mensagem: 'Olá, você está aprendendo Express + HBS!'
    });
}

const hb2 = (req: Request, res: Response) => {
    res.render('main/hb2', {
        poweredByNodejs: true,
        name: 'Express',
        type: 'Framework'
    });
}

const hb3 = (req: Request, res: Response) => {
    const profes = [
        { nome: 'David Fernandes', sala: 1238 },
        { nome: 'Horácio Fernandes', sala: 1233 },
        { nome: 'Edleno Moura', sala: 1236 },
        { nome: 'Elaine Harada', sala: 1231 }
    ];
    res.render('main/hb3', { profes });
}

const hb4 = function (req: Request, res: Response) {
    const profes = [
        { nome: 'David Fernandes', sala: 1238 },
        { nome: 'Horácio Fernandes', sala: 1233 },
        { nome: 'Edleno Moura', sala: 1236 },
        { nome: 'Elaine Harada', sala: 1231 },
    ];
    const technologies = [
        { name: 'Express', type: 'Framework', poweredByNodejs: true },
        { name: 'Laravel', type: 'Framework', poweredByNodejs: false },
        { name: 'React', type: 'Library', poweredByNodejs: true },
        { name: 'Handlebars', type: 'Engine View', poweredByNodejs: true },
        { name: 'Django', type: 'Framework', poweredByNodejs: false },
        { name: 'Docker', type: 'Virtualization', poweredByNodejs: false },
        { name: 'Sequelize', type: 'ORM tool', poweredByNodejs: true },
        ];
    res.render('main/hb4', { technologies });
}

const lorenIp = function (req: Request, res: Response) {
    
    const paragraphs: number = parseInt(req.params.paragraphs, 10);
    res.send(lore(paragraphs));
}

const sobre = (req: Request, res: Response) => {
    res.send('Página sobre');
    //res.redirect("https://www.youtube.com/watch?v=UXWCg5DISlA");
}

const principal = (req: Request, res: Response) => {
    res.send('Página principal do site');
}

export default { hb1, hb2, hb3, hb4, lorenIp, sobre, principal }