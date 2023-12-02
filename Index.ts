import { Recetas } from "./Recetas";
import { ListaDeRecetas } from "./ListaDeRecetas";

const Receta1 = new Recetas ("Encebollado", "Pescado", "90 min");
const Receta2 = new Recetas ("Pastel", "Harina", "180 min");
const Receta3 = new Recetas ("Estofado", "Carne", "60 min");

const ListaDeRecetas1 = ListaDeRecetas.obtenerInstancia();

ListaDeRecetas1.agregarReceta(Receta1);
ListaDeRecetas1.agregarReceta(Receta2);
ListaDeRecetas1.agregarReceta(Receta3);

console.log("Lista de recetas:");
console.log(`=============================================`);
ListaDeRecetas1.mostrarRecetas();