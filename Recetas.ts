export class Recetas {
    nombre: string;
    ingredientePrincipal: string;
    tiempoDeCoccion: string;

    constructor (nombre: string, ingredientePrincipal: string, tiempoDeCoccion: string) {
        this.nombre = nombre;
        this.ingredientePrincipal = ingredientePrincipal;
        this.tiempoDeCoccion = tiempoDeCoccion;
    }

    mostrarReceta(){
        console.log(`Nombre de la receta: ${this.nombre}`);
        console.log(`Ingrediente principal: ${this.ingredientePrincipal}`);
        console.log(`Tiempo de cocción: ${this.tiempoDeCoccion}`);
        console.log(`=============================================`);
    }
}