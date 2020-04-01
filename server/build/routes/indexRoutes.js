(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "express", "../controllers/indexController"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const express_1 = require("express");
    const indexController_1 = require("../controllers/indexController");
    class IndexRoutes {
        constructor() {
            this.router = express_1.Router();
            this.config();
        }
        config() {
            this.router.get('/', indexController_1.indexController.index);
        }
    }
    const indexRoutes = new IndexRoutes();
    exports.default = indexRoutes.router;
});
