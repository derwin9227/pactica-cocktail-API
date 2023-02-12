/* 
strDrink
strAlcoholic
strInstructions
strImageSource
 */
const inputCoctel = document.getElementById("inputCoctel");
const botonBuscar =  document.getElementById("buscarCoctel");


const apiConnect = (inputCoctel) => fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${inputCoctel}`)
    .then(res => res.json())
    .then(cocteles => {
        if(cocteles.drinks === null){
            console.log(`no hay datos del siguiente coctel -> ${inputCoctel} <-`)}
        else{
        console.log(`nombre del coctel -${cocteles.drinks[0].strDrink}- bebida tipo +${cocteles.drinks[0].strAlcoholic}+`)}
        })
    .catch(e => console.log(e))

const buscarCoctel = (nombreCoctel) => apiConnect(inputCoctel.value);
botonBuscar.addEventListener("click", () => buscarCoctel());