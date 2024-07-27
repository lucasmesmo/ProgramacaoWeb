// import { Prof } from './helpersTypes';
import { technologies } from './helpersTypes';
import { Prof } from './helpersTypes';
import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 10,
      min: 6
    },
    wordsPerSentence: {
      max: 20,
      min: 6
    }
});

export function listProfs(profs: Prof[]) {
    const list = profs.map((p)=>`<li>${p.nome}-${p.sala}</li>`);
    return `<ul>${list.join('')}</ul>`;
}

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

export function lore(n: number): string {
    let re = ''; 
    for (let i = 0; i< n; i++){
        const temp = lorem.generateParagraphs(1);
        re += temp +'<br><br>';
    }
    return re;
}