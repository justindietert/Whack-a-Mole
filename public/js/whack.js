(function() {

    'use strict';

    $(document).ready(function() {

        function animateRandomMole() {
            var random = Math.floor(Math.random() * 9);
            var moles = $('.mole');
            var randomMole = moles[random];

            $(randomMole).show('slide', {direction: 'down'}, 400);

            setTimeout(function(){
                $(randomMole).hide('slide', {direction: 'down'}, 200);
            }, 1000);
        }

        animateRandomMole();

        // $('.mole').fadeIn(250);

        // $('.mole').on('click', function(){
        //     $(this).fadeOut(250);
        // });

    });


})();