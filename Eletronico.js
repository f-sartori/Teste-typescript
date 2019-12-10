"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Produto_1 = require("./Produto");
var Eletronic = /** @class */ (function (_super) {
    __extends(Eletronic, _super);
    function Eletronic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Eletronic.prototype, "tipo", {
        get: function () {
            return this._tipo;
        },
        set: function (value) {
            this._tipo = value;
        },
        enumerable: true,
        configurable: true
    });
    return Eletronic;
}(Produto_1.Produto));
exports.Eletronic = Eletronic;
var eletronico = new Eletronic();
eletronico.tipo = "Celular";
eletronico.Nome = "Xiaomi Redmi A6";
eletronico.Valor = 500.00;
eletronico.darDesconto();
console.log(eletronico);
