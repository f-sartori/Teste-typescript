import { Mamifero } from './Mamifero';


export class Cao extends Mamifero {


    
    private _fucinho : boolean;
    public get fucinho() : boolean {
        return this._fucinho;
    }
    public set fucinho(v : boolean) {
        this._fucinho = v;
    }

    
    private _caninoAparente : boolean;
    public get caninoAparente() : boolean {
        return this._caninoAparente;
    }
    public set caninoAparente(v : boolean) {
        this._caninoAparente = v;
    }

    latir(){
        console.log("Au au au...");
    }

    cagar(){
        console.log("Cagando....");
    }

    comerDever(){
        console.log("Comer dever de casa...");
    }
    
    
}

var cao = new Cao();

cao.placentario = true;