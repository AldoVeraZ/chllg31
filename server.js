import express from "express";

/* function getRandomInt() {
  return Math.floor(Math.random() * 2);
} */

const server = express();

try {
  /*   const bool = !!getRandomInt();
  console.log(bool);
  if (bool) throw new Error(""); //Solamente para teastear */

  server.use(express.static("public", { extensions: ["html"] }));

  server.use("*", (require, response) => {
    response.status(404).send(`
          <p style="color: red; font-size: 20px; font-family: Arial, sans-serif; text-align: center;">
            Error 404: Página no encontrada
          </p>
        `);
  });
} catch (error) {
  server.use("*", (require, response) => {
    response.status(500).send(`
            <p style="color: red; font-size: 20px; font-family: Arial, sans-serif; text-align: center;">
              Error 500: Página no encontrada
            </p>
          `);
  });
}

server.listen(3000, () => console.log("Servidor corriendo en el puerto 3000"));
