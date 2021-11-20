



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
        getAll: getAll,
        addListItem: addListItem
};

function addListItem(pokemon){
  let ulElement = document.querySelector(".pokemon-list");
  let listItem = document.createElement("li");
  let buttons = document.createElement("button");
  buttons.classList.add(pokemon.name)
  buttons.innerText = pokemon.name;
 
  listItem.appendChild(buttons)
  ulElement.append(listItem)
  
  console.log(ulElement)
 }



})();


let pokemonData = pokemonRepository.getAll()
         
pokemonData.forEach(function (pokemon) {


pokemonRepository.addListItem(pokemon)


});



