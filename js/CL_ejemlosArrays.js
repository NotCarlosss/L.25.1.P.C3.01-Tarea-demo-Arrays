export default class Mi_Familia {
  ejemploCreacion() {
    //Ejemplo con tipo de dato primitivo
    let edades  = [54, 60, 38, 21];
    let nombres = ["Javier", "Nora", "Lili", "Carlos"];
    let boleanos = [true, false, false, true];
    console.log(edades[3]); //21
    console.log(nombres[0]); //Javier
    console.log(boleanos[3]); //true
    //Ejemplo con tipo de dato objeto
    let familia = [
      {nombre: "Javier", edad: 54},
      {nombre: "Nora", edad: 60},
      {nombre: "Lili", edad: 38},
      {nombre:"Carlos", edad: 21}
      ];
    console.log(familia[0].nombre); //Javier
    console.log(familia[3].edad); //21
  }

  ejemploAcceso1() {
    let familia = [
      {nombre: "Javier", edad: 54},
      {nombre: "Nora", edad: 60},
      {nombre: "Lili", edad: 38},
      {nombre: "Carlos", edad: 21}
      ];
      console.log(familia[1].nombre); // "Nora"
      console.log(familia[2].edad); // 38
  }

  ejemploAcceso2() {
    let hobbiesFamilia = [
      {nombre: "Javier", edad: 54, hobbie: ["Ajedrez", "Leer"]},
      {nombre: "Nora", edad: 60, hobbie: ["Novelas"]},
      {nombre: "Lili", edad: 38, hobbie: ["Coser", "Arte"]}, 
      {nombre: "Carlos", edad: 21, hobbie:["Leer", "Futbol"]}
      ];
      console.log(hobbiesFamilia[0].nombre); // "Javier"
      console.log(hobbiesFamilia[3].hobbie[1]) // "Futbol"
  }

  ejemploPush() {
//Antes del push
let numerosFavoritos = [11, 7, 15, 23];
console.log(numerosFavoritos);  // [11, 7, 15, 23];

//Despues del push
numerosFavoritos.push(88);
console.log(numerosFavoritos); [11, 7, 15, 23, 88];
//Push con varios elementos
numerosFavoritos.push(45, 54);
console.log(numerosFavoritos); [11, 7, 15, 23, 88, 14, 54];
}

  ejemploUnshift() {
    //Antes del unshift
    let comidaFavorita = ["Pizza", "Hamburguesa", "Paella", "Pepito"];
    console.log(comidaFavorita);  // [“Pizza”, “Hamburguesa”, “Paella”, “Pepito”]
    //Despues del unshift
    comidaFavorita.unshift("Ensalada");
    console.log(comidaFavorita);  // [“Ensalada”, “Pizza”, “Hamburguesa”, “Paella”, “Pepito”]
    //Unshift con varios elementos
    comidaFavorita.unshift("Pasta", "Pollo");
    console.log(comidaFavorita);  // [“Pasta”, “Pollo”, “Ensalada”, “Pizza”, “Hamburguesa”, “Paella”, “Pepito”]
  }

  ejemploPop() {

  }
}