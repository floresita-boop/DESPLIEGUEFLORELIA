import { version } from "react";

const VERSION = "1.1.2";

function saludar(nombre) {
  return `Hola, ${nombre}! Bienvenido a la aplicación Florelia`;
}

function healthCheck() {
  return {
    status: "ok",
    version: VERSION,
    timestamp: new Date().toISOString(),
    message: "El sistema está funcionando correctamente."
  };
}

function verificarSistema() {
  const resultado = healthCheck();
  const statusDiv = document.getElementById("status");
  statusDiv.textContent = `Estado: ${resultado.message}, Versión: ${resultado.version}, Timestamp: ${resultado.timestamp}`;
  statusDiv.style.color = "#009B4C";
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("version").textContent = `Versión: ${VERSION}`;
  verificarSistema();
});