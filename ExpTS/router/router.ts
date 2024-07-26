import express, { Router } from 'express';
const router = Router();
const publicPath = `${process.cwd()}`;

router.use('/inf', (req, res) => {
    res.send(publicPath);
})

router.use('/css', express.static(`${publicPath}/public/css`));
router.use('/js', express.static(`${publicPath}/public/js`));
router.use('/img', express.static(`${publicPath}/public/img`));

router.get('/', (req, res) => {
    res.send('Página principal do site');
});

router.get('/sobre', (req, res) => {
    res.send('Página sobre');
    //res.redirect("https://www.youtube.com/watch?v=UXWCg5DISlA");
});


//Exercicio 4
// Acho que vou explicar porque ficou confuso, e ate feio.
// O que ue fiz aqui foi fazer um programa que com base em um grande texto lorem ipsum gera 
// aleatoriamente cada frase do parágrafo. Tecnicamente ta gerando varios paragrafos.

const lorenIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis purus faucibus ante auctor ornare. Pellentesque iaculis et sapien sed efficitur. Suspendisse suscipit tortor ante, ut vulputate turpis posuere id. Sed vulputate, orci quis tristique fringilla, leo risus scelerisque dui, tristique rhoncus arcu neque at tellus. Sed pharetra turpis eu est maximus ullamcorper. Nunc in orci vitae odio eleifend feugiat. In nec lorem sit amet purus rhoncus tempor. Nunc fringilla faucibus justo. Suspendisse quis pretium tortor. Sed ut enim quis sapien feugiat fermentum eget eget orci. Fusce eleifend erat fermentum consectetur cursus. Nullam tempus nibh non tortor tempus porttitor. Quisque tincidunt eu velit vitae vulputate. Donec vel lectus et urna scelerisque pulvinar. Nulla facilisi. Sed purus sapien, finibus et faucibus eget, sollicitudin id velit. Integer a vulputate arcu. Phasellus tortor quam, ornare non facilisis sed, euismod aliquam orci. Suspendisse nec tortor eu urna accumsan suscipit. Duis luctus orci turpis, vel mollis dui porta in. Donec lorem risus, varius nec risus non, consequat faucibus turpis. Praesent commodo commodo diam eu dapibus. Phasellus dapibus consectetur accumsan. Praesent aliquet, erat nec congue tempus, dui felis egestas eros, porttitor cursus est libero eget nibh. Ut porttitor vehicula risus, quis luctus ex. Vestibulum tristique lorem quis sapien vestibulum lobortis. Mauris lobortis ac leo vestibulum eleifend. Etiam fringilla sapien justo, ut eleifend urna vehicula quis. Proin laoreet enim ac quam sagittis venenatis. Duis aliquam nulla arcu. Mauris iaculis neque turpis, in pellentesque dolor lobortis at. Phasellus massa sem, ullamcorper id ullamcorper a, pellentesque ut massa. Etiam iaculis purus nec risus gravida, at lacinia lorem dapibus. Nunc at est iaculis, consectetur leo nec, facilisis augue. Duis at justo quis elit dapibus blandit quis nec erat. Donec imperdiet elit mi, in molestie sapien ultricies non. Etiam consequat consectetur congue. Vivamus ornare commodo sem dapibus pellentesque. Aliquam rutrum sodales justo, non venenatis sapien mattis id. Aliquam erat volutpat. Aliquam non lorem felis. Etiam ullamcorper erat ut libero rhoncus aliquam. Fusce nec elit scelerisque, finibus lacus eu, sollicitudin elit. Nunc accumsan, dui vel consectetur vehicula, ipsum felis elementum ligula, placerat fermentum mauris erat id diam. Phasellus at metus non dolor tincidunt ultrices. Aenean suscipit arcu quis mi hendrerit sodales. In egestas, urna a lacinia dignissim, massa velit mattis nisl, eget mollis nisl est non sem. Aliquam ac ex quam. In fermentum risus massa, eget dignissim augue rhoncus non. Donec ullamcorper lacus quis nibh ultrices blandit. Nam elementum mi vel mollis finibus. Suspendisse semper ligula libero, fringilla consectetur augue semper vitae. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed pulvinar, nisl ac viverra rutrum, nunc diam ullamcorper tellus, at laoreet massa felis nec justo. In porta pellentesque lacus, nec finibus mi convallis eu. Donec quis enim nec magna bibendum consectetur a non est. Nulla a mauris et sem ullamcorper feugiat nec sit amet nulla. Nunc malesuada purus leo, sed sagittis sem cursus ac. Ut tincidunt dictum convallis. Fusce vehicula, neque sed egestas interdum, turpis risus facilisis felis, et scelerisque mi velit et ligula. Proin faucibus est eu rhoncus facilisis. Pellentesque ex mauris, condimentum eget arcu quis, semper faucibus urna. Donec a eros arcu. Integer nunc lacus, feugiat viverra faucibus nec, pretium id orci. Ut iaculis dolor suscipit libero posuere interdum. In ligula nisl, vestibulum vitae lorem vitae, condimentum pretium quam. Cras eget tempor massa. In auctor lectus eu cursus viverra. Etiam vel odio ut neque dignissim vulputate eget sit amet odio. Vestibulum eu orci ex. Morbi quis pretium magna. Sed varius libero enim, et tempor tellus suscipit non. Donec nulla dolor, malesuada nec posuere in, lobortis at nisl. Mauris hendrerit a nunc nec semper. In vulputate arcu turpis, nec laoreet nisi efficitur non. Curabitur tempor magna a nulla tempor eleifend. Nam sapien ligula, convallis vitae auctor id, semper ut lectus. Suspendisse augue ligula, luctus et hendrerit id, vestibulum non nunc. Proin dignissim, leo vitae euismod rutrum, metus sem efficitur lectus, a ornare risus sem a est. Morbi ut eros fermentum, dignissim augue dapibus, semper nulla. Proin luctus non dui non venenatis. Suspendisse tempor sed mauris a dignissim. Morbi eleifend commodo orci nec sollicitudin. Proin quis eleifend arcu. Morbi quis enim vulputate, sagittis nisl ac, molestie massa. Praesent cursus tellus ac velit tristique suscipit. Quisque vel tortor venenatis, ullamcorper leo nec, bibendum ante. Curabitur iaculis nibh arcu, ac dictum lorem ultrices quis. Morbi id magna sapien. Sed consectetur sodales nisi. Etiam ultrices turpis varius sagittis iaculis. Fusce consequat turpis eu risus ullamcorper, et elementum velit efficitur. Mauris aliquam scelerisque lorem non vulputate. Quisque ultrices nec sapien eu faucibus. Aliquam sapien turpis, viverra rhoncus placerat at, dapibus nec enim. Vivamus semper non turpis quis semper. Vestibulum rhoncus tincidunt mi et ullamcorper. Fusce ullamcorper purus quis dolor varius, quis pulvinar lacus iaculis. Morbi pulvinar purus dictum orci dictum, et efficitur tortor hendrerit. Suspendisse ac lacus ut lorem elementum lacinia. Nunc tempus velit sit amet lacus viverra, sed faucibus est faucibus. Maecenas vel enim tincidunt, semper felis eu, eleifend diam. Curabitur ultrices magna eu mattis porttitor. Sed fringilla at neque sit amet ultrices. Integer erat felis, vestibulum vel dapibus ut, luctus rutrum dui. Pellentesque sollicitudin ligula leo, id dignissim leo bibendum in. Mauris at mauris feugiat, semper sapien id, maximus sapien. Morbi scelerisque diam a ligula venenatis tincidunt. Donec vestibulum enim turpis, ac blandit justo finibus eget. Phasellus mollis scelerisque lectus vitae sodales. Duis bibendum magna congue vulputate consequat. Nulla maximus laoreet augue sit amet placerat. Nunc tempor rutrum faucibus. Quisque non quam magna. Nam efficitur bibendum pellentesque. Etiam maximus odio nec velit scelerisque lacinia. Fusce eget sollicitudin dui. Sed in luctus nibh."

function splitStringPreserveSeparator(str: string, separator: string): string[] {
    if (separator.length !== 1) {
        throw new Error("O separador deve ser um único caractere.");
    }
    
    const result: string[] = [];
    let currentSegment = '';

    for (const char of str) {
        if (char === separator) {
            if (currentSegment) {
                result.push(currentSegment);
                currentSegment = '';
            }
            result.push(separator);
        } else {
            currentSegment += char;
        }
    }

    if (currentSegment) {
        result.push(currentSegment);
    }

    return result;
}


router.get("/lorem/:paragraphs", (req, res) => {
    const lorenIpsum_phrases = splitStringPreserveSeparator(lorenIpsum, ".");
    const paragraphs: number = parseInt(req.params.paragraphs, 10);
    let text = '';

    for (let i = 0; i < paragraphs; i++) {
        const rand_num_phr = Math.floor(Math.random() * 15);
        for (let e = 0; e< rand_num_phr; e++) {
            const rand_ind_prh = Math.floor(Math.random() * lorenIpsum_phrases.length);
            text += lorenIpsum_phrases[rand_ind_prh];
        }
        text += '<br><br>';
      }

      res.send(text)
});

/*
Exercicio 5 ?


*/
router.get('/hb1', (req, res) => {
    res.render('hb/hb1', {
        mensagem: 'Olá, você está aprendendo Express + HBS!',
        layout: false,
    });
});

router.get('/hb2', (req, res) => {
    res.render('hb/hb2', {
        poweredByNodejs: true,
        name: 'Express',
        type: 'Framework',
        layout: false,
    });
});

router.get('/hb3', (req, res) => {
    const profes = [
        { nome: 'David Fernandes', sala: 1238 },
        { nome: 'Horácio Fernandes', sala: 1233 },
        { nome: 'Edleno Moura', sala: 1236 },
        { nome: 'Elaine Harada', sala: 1231 }
    ];
    res.render('hb/hb3', { profes, layout: false });
});

// Exercicio 4

router.get('/hb4', function (req, res) {
    const profes = [
        { nome: 'David Fernandes', sala: 1238 },
        { nome: 'Horácio Fernandes', sala: 1233 },
        { nome: 'Edleno Moura', sala: 1236 },
        { nome: 'Elaine Harada', sala: 1231 },
    ];
    res.render('hb/hb4', { profes, layout: false });
});

export default router;