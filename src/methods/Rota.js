const routes = require('express').Router();

class Rota {    
    constructor() {
        this.routes = routes;
    }

    get(path, callback) {
        this.routes.get(path, callback);
    }

    post(path, callback) {
        this.routes.post(path, callback);
    }

    put(path, callback) {
        this.routes.put(path, callback);
    }

    delete(path, callback) {
        this.routes.delete(path, callback);
    }

    all(path, callback) {
        this.routes.all(path, callback);
    }
}

module.exports = Rota;