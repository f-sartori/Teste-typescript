import { Produto } from "./Produto";


export class Eletronic extends Produto{

    private _tipo: string;
    public get tipo(): string {
        return this._tipo;
    }
    public set tipo(value: string) {
        this._tipo = value;
    }





    
}


 var eletronico = new Eletronic();

 eletronico.tipo = "Celular";
 eletronico.Nome = "Xiaomi Redmi A6";
 eletronico.Valor = 500.00;
 
 eletronico.darDesconto();

 console.log(eletronico);