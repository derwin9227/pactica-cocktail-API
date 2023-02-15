/* 
strDrink
strAlcoholic
strInstructions
strDrinkThumb
 */
const inputCoctel = document.getElementById("inputCoctel");
const botonBuscar =  document.getElementById("buscarCoctel");
const coctel = document.getElementById("coctel");
const limpiarBusqueda = () => coctel.innerHTML ="";
const templateCoctel = (nombreCoctel, instrucciones, imagenCoctel) => 
        `<h2>${nombreCoctel}</h2>
        <img src="${imagenCoctel}" alt="${nombreCoctel}">
        <p>${instrucciones}</p>`;

const apiConnect = (inputCoctel) => fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${inputCoctel}`)
    .then(res => res.json())
    .then(cocteles => {
        limpiarBusqueda();
        if(cocteles.drinks === null || inputCoctel === ""){
            alert(`no hay datos del siguiente coctel -> ${inputCoctel} <-`)}
        else{
            cocteles.drinks.forEach(item => {
                coctel.innerHTML += templateCoctel(item.strDrink, item.strInstructions, item.strDrinkThumb);
            });
            }
        })
    .catch(e => console.log(e))

const buscarCoctel = (nombreCoctel) => apiConnect(inputCoctel.value);
botonBuscar.addEventListener("click", () => buscarCoctel());

inputCoctel.addEventListener("keypress", e => e.key==="Enter" ? buscarCoctel() : "");