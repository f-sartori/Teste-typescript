export class Mamifero{
    
    private _placentario : boolean;
    public get placentario() : boolean {
        return this._placentario;
    }
    public set placentario(v : boolean) {
        this._placentario = v;
    }

    
    private _pelos : boolean;
    public get pelos() : boolean {
        return this._pelos;
    }
    public set pelos(v : boolean) {
        this._pelos = v;
    }

    mover(){

    }    
    
    comer(){


    }

    gerarCria(){
        if(this.placentario){
            console.log("Parindo....");
        }else{
            console.log("infertil");
        }    
    }

    
}