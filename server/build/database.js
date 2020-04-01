var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../node_modules/promise-mysql/index", "./keys"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const index_1 = __importDefault(require("../node_modules/promise-mysql/index"));
    const keys_1 = __importDefault(require("./keys"));
    const pool = index_1.default.createPool(keys_1.default.database);
    pool.getConnection()
        .then(connection => {
        pool.releaseConnection(connection);
        console.log('DB esta conectado');
    });
    exports.default = pool;
});
