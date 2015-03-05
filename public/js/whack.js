
$(document).ready(function() {

    function animateRandomMole() {
        var random = Math.floor(Math.random() * 9);
        var moles = $('.mole');
        var randomMole = moles[random];

        $(randomMole).removeClass('invisible');

        setTimeout(function(){
            $(randomMole).addClass('invisible');
        }, 1000);
    }

    animateRandomMole();

    // $('.mole').fadeIn(250);

    // $('.mole').on('click', function(){
    //     $(this).fadeOut(250);
    // });

});
