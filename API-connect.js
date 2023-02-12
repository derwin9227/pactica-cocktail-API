/* 
strDrink
strAlcoholic
strInstructions
strDrinkThumb
 */
const inputCoctel = document.getElementById("inputCoctel");
const botonBuscar =  document.getElementById("buscarCoctel");
const coctel = document.getElementById("coctel");
const templateCoctel = (nombreCoctel, instrucciones, imagenCoctel) => 
        `<h2>${nombreCoctel}</h2>
        <img src="${imagenCoctel}" alt="${nombreCoctel}">
        <p>${instrucciones}</p>`;

const apiConnect = (inputCoctel) => fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${inputCoctel}`)
    .then(res => res.json())
    .then(cocteles => {
        if(cocteles.drinks === null){
            console.log(`no hay datos del siguiente coctel -> ${inputCoctel} <-`)}
        else{
            coctel.innerHTML = templateCoctel(cocteles.drinks[0].strDrink, cocteles.drinks[0].strInstructions, cocteles.drinks[0].strDrinkThumb);}
        })
    .catch(e => console.log(e))

const buscarCoctel = (nombreCoctel) => apiConnect(inputCoctel.value);
botonBuscar.addEventListener("click", () => buscarCoctel());
botonBuscar.addEventListener("mouseover", () => {botonBuscar.style.backgroundColor = "#0000df"; botonBuscar.style.color = "white"});

botonBuscar.addEventListener("mouseleave", () => {botonBuscar.style.backgroundColor = "dimgray"; botonBuscar.style.color = "black"});

inputCoctel.addEventListener("keypress", e => e.key==="Enter" ? buscarCoctel() : "");