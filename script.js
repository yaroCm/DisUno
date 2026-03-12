console.log("Yaro");
const formulario = document.getElementById("formulario-busqueda");
console.log('formulario', formulario);
formulario?.addEventListener("submit", async function(event) {
    event.preventDefault(); 
    
    const input = formulario.querySelector('input[name="query"]');
    const table= document.getElementById('resultados');

    table.innerHTML = '';


    if(!input) return; 

    const respuesta = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input.value}`); 
    const resultado = await respuesta.json();

    console.log('resultado', resultado);

    table.style.border = '1px solid black';

    table.innerHTML =`
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Foto</th>
            </tr>
        </thead>
    `;

    resultado.drinks.forEach((drink) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${drink.strDrink}</td>
            <td><img src="${drink.strDrinkThumb}" alt="${drink.strDrink}" width="100"></td>
        `;
        table.appendChild(row);        
    });


    console.log('Ejecutando busqueda...');
});

