async function obtenerDatos(){
const response=await fetch("file:///C:/Users/Usuario/Desktop/html/catalogo.json/index.html/trabajo%20final.html");
const json =await response. text();
console.log(JSON.parse(json));
}

obtenerDatos();