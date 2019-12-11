"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Mamifero_1 = require("./Mamifero");
var Cao = (function (_super) {
    __extends(Cao, _super);
    function Cao() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Cao.prototype, "fucinho", {
        get: function () {
            return this._fucinho;
        },
        set: function (v) {
            this._fucinho = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cao.prototype, "caninoAparente", {
        get: function () {
            return this._caninoAparente;
        },
        set: function (v) {
            this._caninoAparente = v;
        },
        enumerable: true,
        configurable: true
    });
    Cao.prototype.latir = function () {
        console.log("Au au au...");
    };
    Cao.prototype.cagar = function () {
        console.log("Cagando....");
    };
    Cao.prototype.comerDever = function () {
        console.log("Comer dever de casa...");
    };
    return Cao;
}(Mamifero_1.Mamifero));
exports.Cao = Cao;
var cao = new Cao();
cao.placentario = true;
