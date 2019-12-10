var Carro = /** @class */ (function () {
    function Carro() {
    }
    Carro.prototype.ligar = function () {
        console.log("Ligado");
    };
    Carro.prototype.desligar = function () {
        console.log("Desligado");
    };
    return Carro;
}());
var carro = new Carro();
carro.Cor = "Pink";
carro.Modelo = "Sandero";
carro.Marca = "Renault";
carro.Ano = 1984;
carro.ligar();
carro.desligar();
console.log(carro.Cor);
