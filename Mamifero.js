"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Mamifero = (function () {
    function Mamifero() {
    }
    Object.defineProperty(Mamifero.prototype, "placentario", {
        get: function () {
            return this._placentario;
        },
        set: function (v) {
            this._placentario = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mamifero.prototype, "pelos", {
        get: function () {
            return this._pelos;
        },
        set: function (v) {
            this._pelos = v;
        },
        enumerable: true,
        configurable: true
    });
    Mamifero.prototype.mover = function () {
    };
    Mamifero.prototype.comer = function () {
    };
    Mamifero.prototype.gerarCria = function () {
        if (this.placentario) {
            console.log("Parindo....");
        }
        else {
            console.log("infertil");
        }
    };
    return Mamifero;
}());
exports.Mamifero = Mamifero;
