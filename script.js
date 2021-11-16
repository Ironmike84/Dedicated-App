
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


let pokemonRepository = [
{
  name:"",
  height:"",
  weight:"",
  types:"",

}
];


// Storing A Pokemon in a Repository
let storedPokemon = pokemonRepository; 


//
let thisRepository = function(){
  
  return {
     getAll(){        
      pokemonList.push(storedPokemon)     //<--- Stores the largest pokemon into the Pokemon Repository
                                                  // this function. 
      
      console.log(`Pokemon List:${JSON.stringify(pokemonList)}`)   //<----- Prints the list of Pokemons
     }  
  } 
}()
   
thisRepository.getAll()

pokemonList.forEach(Pokemon)

 function Pokemon(biggest) {
   let heavyWeight = 26.5
   if (biggest.weight === heavyWeight){
     
     console.log(`Hello ${biggest.name} you are (${biggest.weight}.kg's), Wow thats Big!`)
     document.getElementById("heavyWeight").append(`Hello ${biggest.name} you are (${biggest.weight}.kg's), Wow thats Big!`)
     pokemonRepository.push({name: biggest.name, height: biggest.height, weight:biggest.weight, types: biggest.types});
       

    
     
   }
   
    
 }




 
