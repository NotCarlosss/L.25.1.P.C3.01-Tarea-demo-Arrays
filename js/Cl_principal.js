import Cl_ejemlosArrays from "./CL_ejemlosArrays.js";


export default class Cl_index {
  constructor() {
    this.salida = document.getElementById("salida");
    this.salida.innerHTML = this.opciones();
    this.opcion = document.getElementById("opcion");
    this.arreglos = new Cl_ejemlosArrays();
    this.opcion.onclick = () => this.mostrarDemo();
  }
  opciones() {
    return `
    A. Ejemplo creación de arrays<br>
    B. Ejemplo acceso de elementos<br>
    C. Ejemplo acceso de elementos<br>
    D. Ejemplo push<br>
    E. Ejemplo unshift<br>
    F. Ejemplo pop<br>
    G. Ejemplo shift<br>
    H. Ejemplo splice<br>
    I. Ejemplo map() -1-<br>
    J. Ejemplo map() -2-<br>
    K. Ejemplo con ciclos tradicionales<br>
    L. Ejemplo con método forEach<br>
    `;
  }

  mostrarDemo() {
    let opc = prompt("Seleccione una opción:").toUpperCase();
    switch (opc) {
      case "A":
        this.arreglos.ejemploCreacion();
        break;
      case "B":
        this.arreglos.ejemploAcceso1();
        break;
      case "C":
        this.arreglos.ejemploAcceso2();
        break;
      case "D":
        this.arreglos.ejemploPush();
        break;
      case "E":
        this.arreglos.ejemploUnshift();
        break;
      case "F":
        this.arreglos.ejemploPop();
        break;
      case "G":
        this.arreglos.ejemploShifty();
        break;
      case "H":
        this.arreglos.ejemploSplice();
        break;
      case "I":
        this.arreglos.metodoMap1();
        break;
      case "J":
        this.arreglos.metodoMap2();
        break;
      case "K":
        this.arreglos.ciclosTradicionales();
        break;
      case "L":
        this.arreglos.metodoForEach();
        break;
      default:
        alert("Opción no disponible");
    }
  }
}
