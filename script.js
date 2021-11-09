
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


// Loops over the Length of the Pokemon list until the Greatest Weight is found.

for (let i = 0; i < pokemonList.length; i++) {
  const element = pokemonList[i];
  let greatestWeight = 26.5

//Conditional Stament For Writing Out The Biggest Pokemon Onto the DOM.

if (pokemonList[i].weight === greatestWeight){
  document.write(`${pokemonList[i].weight} lbs Wow, That's Big! The Biggest Pokemon Is: ${pokemonList[i].name}`)
}else{
  console.log("No Pokemon Found...")
}
}