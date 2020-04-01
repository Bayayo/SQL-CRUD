(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        //Mysql@localhost:3306 
        database: {
            host: 'localhost',
            user: 'root',
            pass: 'MySqlPass0123',
            database: 'ng_games_db'
        }
    };
});
