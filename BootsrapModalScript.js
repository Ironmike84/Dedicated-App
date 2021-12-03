
//----------------------------------------------------------CloseOut Button
let closeOut = $('#closeOut');
$(closeOut).click(function(){

     $('#exampleModalCenter').css('opacity', ".001")
     console.log('Hidden')
})

//----------------------------------------------------------Close Button
let close = $('#closeButton');
$(close).click(function(){
    $('#exampleModalCenter').css('opacity', ".001")
    console.log('Hidden')
})
//----------------------------------------------------------KEY PRESS ESCAPE

$(window).keypress(function(){
    $('#exampleModalCenter').css('opacity', ".001")
    console.log('Hidden')
})

//----------------------------------------------------------CLICK ESCAPE
// $(window).click(function(){
//     $('#exampleModalCenter').css('opacity', ".001")
//     console.log('Hidden')
// })


