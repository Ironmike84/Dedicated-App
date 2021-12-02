//-------------------------------------------POKEMON APP------------------------------------------------------------------

//-----------------------------------------------------------------------------IIFE-1
 let pokemonRepository = $(function () {
 let pokemonList = $([]);
 
                                 
$(function add(pokemon) {
 if (typeof pokemon === 'object') {
     return pokemonList.push(pokemon);
       } else {
            console.log("Please use objects to input new pokemon")
         }
    })
return $({
     addAll: addAll,
        getAll: getAll,
        loadList:loadList,
        loadDetails:loadDetails,       
})});

//---------------------------------------------------------------GET
$(function getAll() {
   return pokemonList;
  })

 //---------------------------------------------------------------ADD
$(function addListItem(pokemon){
  let ulElement = $(".pokemon-list");
  let listItem = $('<li></li>')
  let buttons = $('<button></button>')
  let named = $('#named')
  let modal = $('#exampleModalCenter')  
        $(buttons).addClass(pokemon)
        $(buttons).attr('innerText', pokemon);
        $(buttons).attr('id', 'button');
        $(named).append(pokemon)
        $(buttons).click(function(){
        $(modal).remove('exampleModalCenterShow')
        $(modal).addClass("exampleModalCenterHide");
        $(listItem).append(buttons)
        $(ulElement).append(listItem)
        })})

   //---------------------------------------------------------------LOAD LIST
 $(function loadList() {
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then$(function (json) {
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
  })

// //---------------------------------------------------------------LOAD DETAILS
  $(function loadDetails(item) {
    
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
  })

//--------------------------------------------------------------------------------------------CLOSE BUTTON

$('#closeButton').on('click',function(){
    $('#exampleModalCenter').addClass('hide')    
    
  })
//------------------------------------------------------------------------------------------------------Close-OutButton
$('#closeOut').on('click',function(){
    $('#exampleModalCenter').addClass('hide')    
    
  })

//------------------------------------------------------------------------------------------------------Escape Key
     
$(window).keypress(function() {
    $('#exampleModalCenter').addClass('hide')
    console.log('hello')
  });

//------------------------------------------------------------------------------------------------------------Click ESCAPE
  $('#exampleModalCenter').click(function() {
    $('#exampleModalCenter').addClass('hide')
    console.log('hello')
  });
//--------------------------------------------------------------SHOW
//     function showDetails(pokemon){
//       // showModal()
//     }
//   })
 //------------------------------------------------------------------POKEMON LIST (STORES LIST OF POKEMON HERE)

 let pokemonData = $(pokemonRepository.getAll())

//-----------------------------------------FOR LOOP------------------------------------------------------------------

 $(pokemonRepository).forEach(function (pokemon) {
$(pokemonList).push(pokemon)
 });

// //---------------------------------------------------------------------------------------------------------------------

 $(loadList().then(function() {
 // Now the data is loaded!
  $(getAll().forEach(function(pokemon){
     $('.pokemon-list').push(pokemon);
   }));
 }));


