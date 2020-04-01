var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "express", "morgan", "cors", "./routes/indexRoutes", "./routes/gamesRoutes"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const express_1 = __importDefault(require("express"));
    const morgan_1 = __importDefault(require("morgan"));
    const cors_1 = __importDefault(require("cors"));
    const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
    const gamesRoutes_1 = __importDefault(require("./routes/gamesRoutes"));
    class Server {
        constructor() {
            this.app = express_1.default();
            this.config();
            this.routes();
        }
        config() {
            this.app.set('port', process.env.PORT || 3000);
            this.app.use(morgan_1.default('dev'));
            this.app.use(cors_1.default());
            this.app.use(express_1.default.json());
            this.app.use(express_1.default.urlencoded({ extended: true }));
        }
        routes() {
            this.app.use('/', indexRoutes_1.default);
            this.app.use('/api/games', gamesRoutes_1.default);
        }
        start() {
            this.app.listen(this.app.get('port'), () => {
                console.log('Se ha inicializado el servidor en el puerto =', this.app.get('port'));
            });
        }
    }
    const server = new Server();
    server.start();
});
