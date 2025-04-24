export default class Mi_Familia {
  ejemploCreacion() {
    //Ejemplo con tipo de dato primitivo
    let edades  = [54, 60, 38, 21];
    let nombres = ["Javier", "Nora", "Lili", "Carlos"];
    let boleanos = [true, false, false, true];
    console.log(edades[3]); //21
    console.log(nombres[0]); //Javier
    console.log(boleanos[1]); //false
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
    //Antes del pop
    let nombres = ["Javier", "Nora", "Lili", "Carlos"];
    console.log(nombres); //  [Javier, Nora, Lili, Carlos]
    //Despues del pop
    let ultimoNombre = nombres.pop();
    console.log(nombres);  // [Javier, Nora, Lili]
    console.log(ultimoNombre); // Carlos
    //Antes del pop con varios elementos
    let familia = [
      {nombre: "Javier", edad: 54},
      {nombre: "Nora", edad: 60},
      {nombre: "Lili", edad: 38},
      {nombre: "Carlos", edad: 21}
      ];
      console.log(JSON.stringify(familia)); 
      //Despues del pop con varios elementos
      let removerFamiliar = familia.pop();
      console.log(JSON.stringify(familia));
      Console.log(removerFamiliar) // {nombre: "Carlos", edad: 21}
  }
  ejemploShifty() {
    //Antes del shift
    let familia = [
      {nombre: "Javier", edad: 54},
      {nombre: "Nora", edad: 60},
      {nombre: "Lili", edad: 38},
      {nombre: "Carlos", edad: 21}
      ];
      console.log(JSON.stringify(familia)); 
      //Despues del shift
      let primerFamiliar = familia.shift();
      console.log(JSON.stringify(familia));
      Console.log(primerFamiliar) // {nombre: "Javier", edad: 54}
  }
  ejemploSplice() {
    //Antes del splice
    let primos = [
      {nombre: "Jose", edad: 33},
      {nombre: "Aron", edad: 23},
      {nombre: "Matias", edad: 25},
      {nombre: "Luis", edad: 27}
      ];
      console.log(JSON.stringify(primos)); 
      //Despues del splice
      let eliminados = primos.splice(1, 2, {nombre: "Ana", edad: 29}, {nombre: "Miguel", edad: 20});
      console.log(JSON.stringify(primos));
      console.log(JSON.stringify(eliminados)); 
  }
  metodoMap1() {
    let hermanas = [
      {nombre: "Michel", edad:27},
      {nombre: "Lili", edad: 38},
      {nombre: "Mary", edad: 40}
      ];
      let nombreHermanas = hermanas.map((hermana) => hermana.nombre);
      console.log(nombreHermanas); // ["Michel", "Lili", "Mary"]
  }
  metodoMap2() {
    let familiaMasUno = [
      {nombre: "Javier", edad: 54},
      {nombre: "Nora", edad: 60},
      {nombre: "Lili", edad: 38},
      {nombre: "Carlos", edad: 21}
      ];
    let familiaConEdadMasUno = familiaMasUno.map((familiar) => ({
      ...familiaMasUno,
      edad: familiaMasUno.edad + 1
    }));
    console.log(JSON.stringify(familiaMasUno));
    console.log(JSON.stringify(familiaConEdadMasUno));
  }
  ciclostradicionales() {
    //Ciclo con for
    let familiaConFor = [
      {nombre: "Carlos", edad: 21},
      {nombre: "Lili", edad: 38},
      {nombre: "Nora", edad: 60},
      ];
    for (let i = 0; i < familiaConFor.length; i++) {
    console.log(familiaConFor[i]);
    };
      //Ciclo con While
    let familiaConWhile = [
      {nombre: "Carlos", edad: 21},
      {nombre: "Lili", edad: 38},
      {nombre: "Nora", edad: 60},
      ];
        
    let o = 0;
      while (o < familiaConWhile.length) {
    console.log(familiaConWhile[o])
        o++
      };
        //Ciclo con Do While
    let familiaConDoWhile = [
      {nombre: "Carlos", edad: 21},
      {nombre: "Lili", edad: 38},
      {nombre: "Nora", edad: 60},
      ];    
    let u = 0;
    do {
    console.log(familiaConDoWhile[u]);
     u++;
    } while (u < familiaConDoWhile.length);
  }
  ejemploForEach() {
    let familiaForEach = [
      {nombre: "Carlos", edad: 21},
      {nombre: "Lili", edad: 38},
      {nombre: "Nora", edad: 60},
      ]; 
      //Recorrido con funcion tradicional
      familiaForEach.forEach(function (item) {
        console.log(item);
  });
      //Recorrido con arrow function
      familiaForEach.forEach((item) => console.log(item));
  }
}