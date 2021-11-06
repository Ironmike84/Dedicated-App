
//Pokemon List Obejct Array 
let pokemonList = [
    {name: "Jolteon",
    height: 0.8,
    weight: 24.5,
    types: "electric"}
,
{    name: "Flareon",
    height: 0.9,
    weight: 25,
    types: "fire", },
{
    name: "Espeon",
    height: 0.9,
    weight: 26.5,
    types: "psychic"
}
]

//loop that iterates over the Pokemon List Array//
for (let i = 0; i < pokemonList.length; i++) { 
  document.write(pokemonList[i].name)
  }
for (let i = 0; i < pokemonList.length; i++) {
  const elementEd = pokemonList[i];
  const elementEdd = pokemonList[i].height;  
console.log(elementEd, elementEdd)

}
// An Attempted Script to get the If Condtional Statement to work but it does not work...

let user = prompt("Type in a Pokemon: Jolteon, Flareon, or Espeon...")
function doThis(){
  
    if (user.includes === "Jolteon" || "jolteon"){
 console.log(pokemonList[0]);
  }
  else if (user.includes === "Flareon" || "flareon"){
    console.log(pokemonList[1]);
  }
  else if (user.includes = "Epseon"){
    console.log(pokemonList[2]);
  }
  else{
    console.log("Do nothing");
  }
}
doThis()


 

// Listing All pokemon Character descriptions in a list on the left hand side of the page://
document.write(`Name:${pokemonList[0].name} <br> Height: ${pokemonList[0].height} <br> Weight: ${pokemonList[0].weight} <br> Type:${pokemonList[1].types} <br>--------------<br>`);

document.write(`Name:${pokemonList[1].name} <br> Height: ${pokemonList[1].height} <br> Weight: ${pokemonList[1].weight} <br> Type:${pokemonList[1].types} <br>--------------<br>`);

document.write(`Name:${pokemonList[2].name} <br> Height: ${pokemonList[2].height} <br> Weight: ${pokemonList[2].weight} <br> Type:${pokemonList[1].types} <br>--------------<br>`);
