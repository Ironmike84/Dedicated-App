
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

let storeMe = [
{
  name:"",
  height:"",
  weight:"",
  types:"",

}
];

pokemonList.forEach(Pokemon)

 function Pokemon(biggest) {
   let heavyWeight = 26.5
   if (biggest.weight === heavyWeight){
     
     console.log(`Hello ${biggest.name} you are (${biggest.weight}.kg's), Wow thats Big!`)
     document.getElementById("heavyWeight").append(`Hello ${biggest.name} you are (${biggest.weight}.kg's), Wow thats Big!`)
     storeMe.push({name: biggest.name, height: biggest.height, weight:biggest.weight, types: biggest.types})
   }else{
     console.log("This is not the largest weight")
     
   }
 }

 let pokemonRepository = (function (){
  
  return {
  
    getAll: function(i){
      console.log(pokemonList[i]);
     }

   }
 })()

  //  function addToArray(){
  //   storeMe.push(biggest);
  // }


