const express = require('express');

const IniciarServidor = (port, message) => {
    const app = express();

    app.listen(port, () => {
        console.log(message);
    })

}

module.exports = IniciarServidor;