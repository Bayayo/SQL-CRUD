var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../database"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const database_1 = __importDefault(require("../database"));
    class GamesController {
        list(req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                const games = yield database_1.default.query('select * from games');
                res.json(games);
                //db.query('select * from games');
                //res.json({Texto:'listando todos los juegos'});
                //res.send('Hello')
            });
        }
        getOne(req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                const { id } = req.params;
                const games = yield database_1.default.query('SELECT * FROM GAMES WHERE ID = ?', [id]);
                if (games.length > 0) {
                    return res.json(games[0]);
                }
                res.status(404).json({ text: 'El juego no existe' });
            });
        }
        create(req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                yield database_1.default.query('INSERT INTO games set ?', [req.body]);
                console.log(req.body);
                res.json({ Texto: 'Se ha creado el juego!!!' });
            });
        }
        delete(req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                const { id } = req.params;
                yield database_1.default.query('DELETE FROM GAMES WHERE ID = ? ', [id]);
                res.json({ Texto: 'Eliminando juego: ' + req.params.id });
            });
        }
        update(req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                const { id } = req.params;
                yield database_1.default.query('UPDATE GAMES SET ? WHERE id = ?', [req.body, id]);
                res.json({ Texto: 'Se actualizó el juego: ' + req.params.id });
            });
        }
    }
    const gamesController = new GamesController();
    exports.default = gamesController;
});
