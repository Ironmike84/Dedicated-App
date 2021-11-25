
//-------------------------------------------POKEMON APP------------------------------------------------------------------
//========================================================================================================================




//-----------------------------------------------------------------------------IIFE-1
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
        modalClick:modalClick,
        showModal:showModal,
            
};


//---------------------------------------------------------------GET
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
//---------------------------------------------------------------SHOW POKEMON
    function showDetails(pokemon){
      let modal = document.getElementById("modal-container");
      let modalValue = Boolean(document.getElementById("modal-container").value)
      let button = document.getElementById("close");
      let name = document.getElementById("name");
      let height = document.getElementById("height");
      let imaged = document.getElementById("imaged")
      let pic = document.getElementById('pic')
      
      
//-----------------------------------------------------------------------IF STATEMENT FOR EMPTY BOX VALUE IN BOX.        
       if (modalValue === false) {
        name.innerText = `Name: ${pokemon.name}`;
        height.innerText = `Height: ${pokemon.height}`
        
        pic.src = pokemon.imageUrl
        pic.style.width = "150px"
        pic.style.height = "150px"
        modal.append(pic)
        modal.append(button)
      console.log(pokemon)
      }
      showModal()
    }
  }
 
//---------------------------------------------------------------LOAD LIST
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

//---------------------------------------------------------------LOAD DETAILS
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
//-------------------------------------------------------------------------SHOW MODAL
  function modalClick(){
  document.querySelector("#show-modal").addEventListener("click",() =>{
    showModal()
  })
}
  function showModal(){
    let modalContainer = document.querySelector("#modal-container");
    modalContainer.id = "is-visible"
  
  //----------------------------------------------------------------------------ClOSE BUTTON
    let closeButtonElement = document.getElementById("close");;
  
   closeButtonElement.addEventListener("click", function(){
       console.log("Closed")
       modalContainer.id = "modal-container"
        
   })
  }


  

})();

//------------------------------------------------------------------POKEMON LIST (STORES LIST OF POKEMON HERE)

let pokemonData = pokemonRepository.getAll()

//-------------------------------------------------------------------------------FOR LOOP

pokemonData.forEach(function (pokemon) {
pokemonRepository.addListItem(pokemon)
});




//--------------------------------------------------------------------------------FUNCTION CALLS
pokemonRepository.loadList().then(function() {
  // Now the data is loaded!
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
 
  });


});


//---------------------------------------------------------------------------------------------WINDOW EVENTS FOR DETAILS BOX

  window.addEventListener('keydown', (e) =>{
    let modalContainer = document.getElementById("is-visible")
    if (e.key === "Escape"){
      console.log("Working")
      modalContainer.id = "modal-container"
      console.log(modalContainer)
    }
  })

  //-----------------------------------------------------------------------------------WINDOW CLICK


  
  window.addEventListener('click', () =>{
    let modalContainer = document.getElementById("is-visible")
    
      console.log("Working")
      modalContainer.id = "modal-container"
      console.log(modalContainer)
    
  })

