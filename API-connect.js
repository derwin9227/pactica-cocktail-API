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
            coctel.innerHTML = templateCoctel(cocteles.drinks[0].strDrink, cocteles.drinks[0].strInstructions, cocteles.drinks[0].strDrinkThumb);
        console.log(`nombre del coctel -${cocteles.drinks[0].strDrink}- bebida tipo +${cocteles.drinks[0].strAlcoholic}+`)}
        })
    .catch(e => console.log(e))

const buscarCoctel = (nombreCoctel) => apiConnect(inputCoctel.value);
botonBuscar.addEventListener("click", () => buscarCoctel());