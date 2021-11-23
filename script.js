



 let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

                                  
function add(pokemon) {




 if (typeof pokemon === 'object') {
     return pokemonList.push(pokemon);
       } else {
            console.log("Please use objects to input new pokemon")
         }
    }
                                  

 return {
     add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList:loadList,
        loadDetails:loadDetails,
        
      
};
function getAll() {
  return pokemonList;
 }
//---------------------------------------------------------------ADD
function addListItem(pokemon){
  let ulElement = document.querySelector(".pokemon-list");
  let listItem = document.createElement("li");
  let buttons = document.createElement("button");
  buttons.classList.add(pokemon.name)
  buttons.innerText = pokemon.name;
 
  listItem.appendChild(buttons)
  ulElement.append(listItem)
  
  buttons.addEventListener('click', function () {
    loadDetails(pokemon).then(function () {
      showDetails(pokemon)
        });
    })
    function showDetails(pokemon){
      console.log(pokemon)
    }
  }
 
//---------------------------------------------------------------LOAD
  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
        });
    }).catch(function (e) {
      console.error(e);
    })
  }


  function loadDetails(item) {
    
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
      pokemonList.push(item.name);
      pokemonList.push(item.height);
      pokemonList.push(item.imageUrl);
    }).catch(function (e) {
      console.error(e);
    });
  }

  
})();


let pokemonData = pokemonRepository.getAll()
         
pokemonData.forEach(function (pokemon) {

pokemonRepository.addListItem(pokemon)


});

pokemonRepository.loadList().then(function() {
  // Now the data is loaded!
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
    
  });
});


