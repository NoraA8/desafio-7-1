import { readFile, writeFile } from "fs";

export function registrar(nombre, edad, animal, color, enfermedad) {
  const cita = {
    nombre,
    edad,
    animal,
    color,
    enfermedad,
  };

  readFile("./citas.json", "utf8", (err, data) => {
    if (err) {
      console.log("Error al leer el archivo citas.json:", err);
      return;
    }

    const citas = JSON.parse(data);
    citas.push(cita);

    writeFile("./citas.json", JSON.stringify(citas), "utf8", (err) => {
      if (err) {
        console.log("Error al escribir en el archivo citas.json:", err);
      } else {
        console.log("Cita registrada exitosamente.");
      }
    });
  });
}

export function leer() {
  readFile("./citas.json", "utf8", (err, data) => {
    if (err) {
      console.log("Error al leer el archivo citas.json:", err);
      return;
    }
    const citas = JSON.parse(data);
    console.log("Citas registradas:");
    citas.forEach((cita) => {
      console.log(cita);
    });
  });
}
