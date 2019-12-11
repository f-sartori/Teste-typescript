"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Produto = (function () {
    function Produto() {
    }
    Object.defineProperty(Produto.prototype, "Id", {
        get: function () {
            return this._Id;
        },
        set: function (value) {
            this._Id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "Nome", {
        get: function () {
            return this._Nome;
        },
        set: function (value) {
            this._Nome = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "Valor", {
        get: function () {
            return this._Valor;
        },
        set: function (value) {
            this._Valor = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "Desconto", {
        get: function () {
            return this._Desconto;
        },
        set: function (value) {
            this._Desconto = value;
        },
        enumerable: true,
        configurable: true
    });
    Produto.prototype.darDesconto = function () {
        var desc = this._Valor * 0.3;
        this._Desconto = desc;
    };
    return Produto;
}());
exports.Produto = Produto;
