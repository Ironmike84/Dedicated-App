//----------------------------------------------------------Show Button
let primaryButton = $('#primaryButton')
$(primaryButton).click(function(){
    $('#exampleModalCenter').modal('show')
})

//----------------------------------------------------------CloseOut Button
let closeOut = $('#closeOut');
$(closeOut).click(function(){
     $('#exampleModalCenter').modal('hide')
})

//----------------------------------------------------------Close Button
let close = $('#close');
$(close).click(function(){
    $('#exampleModalCenter').modal('hide')
})
