
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

//                          ?????    Why Delete this becuase I have no where to put the Pokemons without it.  ?????
                                    // Are We I thought earlier we were creating a cariable to store our pokemon in???
let pokemonRepository = [
{
  name:"",
  height:"",
  weight:"",
  types:"",
}
];

//
let thisRepository = function(){
const pokemonListLists = []     //<--- Is this where we want to store the pokemon...????
  return  {
    
 getAll(){
  console.log(`Pokemon List:${JSON.stringify(pokemonList)}`)   //<----- Prints the list of Pokemons (If I don't do this Nothing happens)      
 }
            //?? this is the only thing that I can type here nothing else works but it doesnt' do anything  unless I
                   //  console.log(pokemonList) But that doesn't seem to be what you want. What Should go here?
 

}()

}

   // This has an error on calling the getAll function??? getAll by itself doesn't work either it means nothing Apparently. Unless you use it as a name.
thisRepository.getAll();

// If i get Rid of this my Forloop stops printing out to the console...???? So you cant pick out a pokemon to store anymore..???
/// How are we picking out a pokemon to store without this.????
pokemonList.forEach(Pokemon)

 function Pokemon(biggest) {
   let heavyWeight = 26.5
   if (biggest.weight === heavyWeight){
     
     console.log(`Hello ${biggest.name} you are (${biggest.weight}.kg's), Wow thats Big!`)
     document.getElementById("heavyWeight").append(`Hello ${biggest.name} you are (${biggest.weight}.kg's), Wow thats Big!`)
     pokemonRepository.push({name: biggest.name, height: biggest.height, weight:biggest.weight, types: biggest.types});
       

    
     
   }
   
    
 }




 
