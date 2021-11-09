
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
// for (let i = 0; i < pokemonList.length; i++) { 
//   document.write(pokemonList[i].name)
//   }
for (let i = 0; i < pokemonList.length; i++) {
  const elementEd = pokemonList[i];
  const elementEdd = pokemonList[i].height;  
console.log(elementEd, elementEdd)

}

//Conditional Stament For Writing Out The Biggest Pokemon Onto the DOM.
let greatestWeight = 26.5
if (pokemonList[0].weight === greatestWeight){
  document.write(`${pokemonList[0].weight} lbs Wow, That's Big! ${pokemonList[0].name}`)
}else if (pokemonList[1].weight === greatestWeight){
  document.write(`${pokemonList[1].weight} lbs Wow, That's Big! ${pokemonList[1].name}`)
}else if (pokemonList[2].weight === greatestWeight){
  document.write(`${pokemonList[2].weight} lbs Wow, That's Big! ${pokemonList[2].name}`)
}else{
  console.log("No Pokemon Found...")
}
 