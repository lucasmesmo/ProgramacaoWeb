// import { Prof } from './helpersTypes';
import { technologies } from './helpersTypes';

/*
export function listProfs(profs: Prof[]) {
    const list = profs.map((p)=>`<li>${p.nome}-${p.sala}</li>`);
    return `<ul>${list.join('')}</ul>`;
}
*/

export function listTecNode(tecs: technologies[]) {
    let tecs_aproved = '<ul>';
    tecs.forEach((tec) => {
        if( tec.poweredByNodejs){
            tecs_aproved += '<li>'+tec.name+' - '+tec.type+'</li>';
        };
    });
    tecs_aproved += '</ul>';
    return tecs_aproved;
}