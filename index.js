const ExibirNoConsole = require('./src/methods/ExibirNoConsole');
const Função = require('./src/methods/Função');
const IniciarServidor = require('./src/methods/IniciarServidor');
const Rota = require('./src/methods/Rota');

Rota.get('/rota', (req, res) => {
    ExibirNoConsole('Rota POST chamada');
    res.send('Rota POST executada com sucesso!');
});

IniciarServidor(3000, 'Servidor iniciado na porta 3000');