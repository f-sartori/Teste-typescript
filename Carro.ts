export class Carro{
    
   private _Id: number;
 
   private _Cor: string;
   private _Modelo: string;
  
   private _Marca: string;
   
   private _Ano: number;
   




public get Id(): number {
    return this._Id;
}

public get Cor(): string {
    return this._Cor;
}
public set Cor(value: string) {
    this._Cor = value;
}

public get Modelo(): string {
    return this._Modelo;
}
public set Modelo(value: string) {
    this._Modelo = value;
}

public get Marca(): string {
    return this._Marca;
}
public set Marca(value: string) {
    this._Marca = value;
}

public get Ano(): number {
    return this._Ano;
}
public set Ano(value: number) {
    this._Ano = value;
}


    ligar(){
        console.log("Ligado");    
    }
    desligar(){
        console.log("Desligado");
    }
}




