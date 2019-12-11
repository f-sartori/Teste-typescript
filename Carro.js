"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Carro = (function () {
    function Carro() {
    }
    Object.defineProperty(Carro.prototype, "Id", {
        get: function () {
            return this._Id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Carro.prototype, "Cor", {
        get: function () {
            return this._Cor;
        },
        set: function (value) {
            this._Cor = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Carro.prototype, "Modelo", {
        get: function () {
            return this._Modelo;
        },
        set: function (value) {
            this._Modelo = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Carro.prototype, "Marca", {
        get: function () {
            return this._Marca;
        },
        set: function (value) {
            this._Marca = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Carro.prototype, "Ano", {
        get: function () {
            return this._Ano;
        },
        set: function (value) {
            this._Ano = value;
        },
        enumerable: true,
        configurable: true
    });
    Carro.prototype.ligar = function () {
        console.log("Ligado");
    };
    Carro.prototype.desligar = function () {
        console.log("Desligado");
    };
    return Carro;
}());
exports.Carro = Carro;
