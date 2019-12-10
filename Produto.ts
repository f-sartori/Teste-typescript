
export class Produto{
    
    private _Id: number;

    public get Id(): number {
        return this._Id;
    }
    public set Id(value: number) {
        this._Id = value;
    }
  
    private _Nome: string;
    public get Nome(): string {
        return this._Nome;
    }
    public set Nome(value: string) {
        this._Nome = value;
    }

    private _Valor: number;
    public get Valor(): number {
        return this._Valor;
    }
    public set Valor(value: number) {
        this._Valor = value;
    }

    private _Desconto: number;
    public get Desconto(): number {
        return this._Desconto;
    }
    public set Desconto(value: number) {
        this._Desconto = value;
    }

    darDesconto(){
    
        var desc = this._Valor * 0.3;
        this._Desconto = desc;
    }
    


 
    
}