 async function buscar()  {

const respuesta = await fetch(`http://localhost:3000/datos`); 
const resultado = await respuesta.json();

    console.log('resultado', resultado);
}

buscar();