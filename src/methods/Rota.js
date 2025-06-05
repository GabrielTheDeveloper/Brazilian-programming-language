const routes = require('express').Router();

class Rota {    
    constructor() {
        this.routes = routes;
    }

    static get(path, callback) {
        routes.get(path, callback);
    }

    static post(path, callback) {
        routes.post(path, callback);
    }

    static put(path, callback) {
        routes.put(path, callback);
    }

    static delete(path, callback) {
        routes.delete(path, callback);
    }

    static all(path, callback) {
        routes.all(path, callback);
    }
}

module.exports = Rota;