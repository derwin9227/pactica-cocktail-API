//www.thecocktaildb.com/api/json/v1/1/search.php?s=
fetch("https://thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
    .then(res => res.json())
    .then(cocteles => console.log(`nombre del coctel -${cocteles.drinks[0].strDrink}- bebida tipo +${cocteles.drinks[0].strAlcoholic}+`))
    .catch(e => e)

    //console.log(`nombre del coctel ${cocteles.drink[0].strDrink} bebida tipo ${cocteles.drink[0].strAlcoholic}`)