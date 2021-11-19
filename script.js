



 let pokemonRepository = (function () {
    let pokemonList = [ {
     name: "jolteon",
     types: "electric",
     height: 0.8,
    },
    {
      name: "charmander",
      types: "fire",
      height: 0.6,
    },
    {
      name: "clefable",
      types: "fairy",
      height: 1.3,
    }
];
                                    
  function add(pokemon) {
   if (typeof pokemon === 'object') {
       return pokemonList.push(pokemon);
         } else {
              console.log("Please use objects to input new pokemon")
           }
      }
                                    
function getAll() {
   return pokemonList;
  }
   return {
       add: add,
          getAll: getAll
    
  };
  function addListItem(pokemon){
    let ulElement = document.querySelector("ulElement");
let listItem = document.createElement("li");
let buttons = document.createElement("button");
buttons.classList.add(pokemon.name)
buttons.innerText = pokemon.name;

document.body.append(listItem)
listItem.appendChild(buttons)
ulElement.appendChild(listItem)

  }
  
 })();

 let pokemonData = pokemonRepository.getAll()
                  
pokemonData.forEach(function (pokemon) {
addListItem()
});


let storedPokemon = [];