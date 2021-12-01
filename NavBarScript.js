
let navbarToggler = $('.navbar-toggler')

$(navbarToggler).click(function(e){
    let navBarSupportedContent = $('#navbarSupportedContent')
    $(navBarSupportedContent).removeClass('collapse navbar-collapse');
    $(navBarSupportedContent).toggle('expand navbar-expand');

    if (navBarSupportedContent.className = 'expand' && screen.width > "500px"){
       
        console.log("expanded")
    }

})

