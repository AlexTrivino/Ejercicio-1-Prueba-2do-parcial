import { Recetas } from "./Recetas";

export class ListaDeRecetas {
    private recetas: Recetas [] = [];
    private static instanciaDeAcceso: ListaDeRecetas | null = null;
    //Inicia instanciaDeAcceso como null hasta que le den un objeto y la deckara una variable estática.

    constructor(){
        this.recetas = [];
    }

    static obtenerInstancia(): ListaDeRecetas {
        if (!ListaDeRecetas.instanciaDeAcceso) {
          ListaDeRecetas.instanciaDeAcceso = new ListaDeRecetas();
        }
        return ListaDeRecetas.instanciaDeAcceso;
      }
    
      agregarReceta(receta: Recetas): void {
        this.recetas.push(receta);
      }
    
      mostrarRecetas(): void {
        this.recetas.forEach((receta) => {
          receta.mostrarReceta();
        });
      }
}