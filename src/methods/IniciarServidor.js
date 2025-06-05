const express = require('express');

const IniciarServidor = (port, message) => {
    const app = express();

    app.listen(port, () => {
        console.log(message);
        if (message) {
            console.log(message);
        }
    })

}

module.exports = IniciarServidor;