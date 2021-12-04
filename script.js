  //-------------------------------------------POKEMON APP------------------------------------------------------------------
  //========================================================================================================================
  

  //-------------------------------------------------------------------------Set Default View for Modal Box
  function setdefault(){
    let modalHide= document.getElementById('exampleModalCenter')
    modalHide.style.opacity = ".001"
    
  }
  setdefault()
  
  //-----------------------------------------------------------------------------IIFE-1
  let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
   return {
     
        add: add,
           getAll: getAll,
           addListItem: addListItem,
           loadList:loadList,
           loadDetails:loadDetails,    
           modalClick:modalClick,
           showModal:showModal,               
   };
   
   function add(pokemon) {
    if (typeof pokemon === 'object') {
        return pokemonList.push(pokemon),
        myPokemonlist.push(pokemon);
          } else {
               console.log("Please use objects to input new pokemon")
            }
       }

   //---------------------------------------------------------------GET
   function getAll() {
     return pokemonList;
    }
      
    //---------------------------------------------------------------ADD
   function addListItem(pokemon){
     let ulElement = document.querySelector(".pokemon-list");
     let listItem = document.createElement("li");
     let buttons = document.createElement("button");
     let modal = document.getElementById('exampleModalCenter')
     let named = document.getElementById("named");
     let height = document.getElementById("height");
     buttons.classList.add(pokemon.name)
     buttons.innerText = pokemon.name;
     let pic = document.getElementById("pic")
     listItem.appendChild(buttons)
     ulElement.append(listItem)

//---------------------------------------------------------------------------------------------SEARCH BOX MODAL SHOW     
let search = document.getElementById('search')     
     search.addEventListener('click', function () {
      let searchItem = document.getElementById('searchItem').value;

      if (searchItem === pokemon.name){
      loadDetails(pokemon).then(function () {
       let modal = document.getElementById('exampleModalCenter')
        showDetails(pokemon)
        named.innerText = `Name: ${pokemon.name}`;
        named.style.fontWeight = 'bold'
        named.style.color = "red"
        height.innerText = `Height: ${pokemon.height}`
        height.style.fontWeight = 'bold'
        pic.src = pokemon.imageUrl
        pic.style.width = "175px"
        pic.style.height = "175px"
        pic.style.position = "absolute"
        pic.style.left = "50px"
         modal.style.opacity = "1.5"   
          });
        }else{
          console.log('failed')
        }
      })
  // --------------------------------------------------------------------------------------------POKEMON BUTTON MODAL CLICK
  
     buttons.addEventListener('click', function () {
       loadDetails(pokemon).then(function () {
        let modal = document.getElementById('exampleModalCenter')
         showDetails(pokemon)
         named.innerText = `Name: ${pokemon.name}`;
         named.style.fontWeight = 'bold'
         named.style.color = "red"
         height.innerText = `Height: ${pokemon.height}`
         height.style.fontWeight = 'bold'
         pic.src = pokemon.imageUrl
         pic.style.width = "175px"
         pic.style.height = "175px"
         pic.style.position = "absolute"
         pic.style.left = "50px"
          modal.style.opacity = "1.5"   
           });
       })
   //---------------------------------------------------------------SHOW POKEMON
       function showDetails(pokemon){
         let modal = document.getElementById("exampleModalCenter");
         let modalValue = document.getElementById("exampleModalCenter");
         let button = document.getElementById("close");
         let ModalBody = document.getElementById('modal-body')
         let pic = document.getElementById('pic')
         console.log(pokemon.name)
         console.log(pokemon.height)

   //-----------------------------------------------------------------------IF STATEMENT FOR EMPTY BOX VALUE IN BOX.        
          if (modalValue === false) {
           named.innerText = `Name: ${pokemon.name}`;
           height.innerText = `Height: ${pokemon.height}`
           pic.src = pokemon.imageUrl
           modal.append(pic)
           modal.append(button)
         console.log(pokemon)
         }
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
             detailsUrl: item.url,
             height: item.height,
             image: item.imageUrl
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
         myPokemonlist.push({name:item.name});
         myPokemonlist.push({height:item.height});
         myPokemonlist.push({imageUrl:item.imageUrl}),
         myPokemonlist.push(item.types);
       }).catch(function (e) {
         console.error(e);
       });
     
     }
   //-------------------------------------------------------------------------SHOW MODAL
     function modalClick(){
     document.querySelector('button').addEventListener("click",() =>{
       showModal()
     })
   }

     function showModal(){
       let modalContainer = document.getElementById("exampleModalCenterHide");
         modalContainer.id = "exampleModalCenterShow"   
     }
   })();
   
   //------------------------------------------------------------------POKEMON LIST (STORES LIST OF POKEMON HERE)
   let pokemonData = pokemonRepository.getAll()
   let myPokemonlist = [{
     name:'',
     imageUrl:'',
     height:'',
     types:''
   }]
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
