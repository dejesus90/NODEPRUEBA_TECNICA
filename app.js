const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
//application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

app.post('/api/numeroItem', function (req, res) {
    console.log({dato:req.body});
    let numero = parseInt(req.body.numero);
    let resut = [];
    for (let index = numero; index <= numero+100; index++) {
        let res = index % 5;
        let clase = 'white';
        switch (res) {
            case 1: clase='red'; break;
            case 2: clase='green'; break;
            case 3: clase='blue'; break;
            case 4: clase='dark'; break;
            // case 5: clase='dark'; break;
            default:
                break;
        }
        const element = {
            valor:index+1,
            clase:clase
        }
        resut.push(element)
    }
    res.send(
    {
        resultado:resut
    }
    );
});
app.post('/api/reset', function (req, res) {
    let numero = parseInt(req.body.numero);
    res.send({
        numero:0,
        clase:''
    })
});
app.post('/api/suma', function (req, res) {
    let numero = parseInt(req.body.numero);
    numero += 1 ;

    let clase = '';
    let numero1 = (numero < 0) ? numero * -1 : numero;
            let resl = parseInt(numero1)  % 3;
            resl = (resl < 0) ? resl * 1 : resl
            switch (resl) {
                case 0: clase='red'; break;
                case 1: clase='green'; break;
                case 2: clase='blue'; break;
                default:
                    break;
            }
            
    res.send({
        numero:numero,
        clase:clase
    })
});
app.post('/api/resta', function (req, res) {
    let numero = parseInt(req.body.numero);
    numero -= 2 ;

    let clase = '';
    let numero1 = (numero < 0) ? numero * -1 : numero;
            let resl = parseInt(numero1)  % 3;
            resl = (resl < 0) ? resl * 1 : resl
            switch (resl) {
                case 0: clase='red'; break;
                case 1: clase='green'; break;
                case 2: clase='blue'; break;
                default:
                    break;
            }
            
    res.send({
        numero:numero,
        clase:clase
    })
});
app.post('/api/divide', function (req, res) {
    let numero = parseInt(req.body.numero);
    numero = numero / 3 ;

    let clase = '';
    let numero1 = (numero < 0) ? numero * -1 : numero;
            let resl = parseInt(numero1)  % 3;
            resl = (resl < 0) ? resl * 1 : resl
            switch (resl) {
                case 0: clase='red'; break;
                case 1: clase='green'; break;
                case 2: clase='blue'; break;
                default:
                    break;
            }
            
    res.send({
        numero:numero,
        clase:clase
    })
});


app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), function () {
  console.log('Example app listening on port'+ app.get('puerto'));
});