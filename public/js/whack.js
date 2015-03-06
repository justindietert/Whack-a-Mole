(function() {

    'use strict';

    $(document).ready(function() {

        var timer = 30;
        var score = 0;

        $('#start').on('click', startGame);

        function startGame(){
            $('#start').off('click', startGame).addClass('whack').html('WHACK!');
            timer = 30;
            score = 0;
            animateBoard();
        }


        function animateRandomMoleOne() {
            var random = Math.floor(Math.random() * 9);
            var moles = $('.mole');
            var randomMole = moles[random];

            console.log(random);

            $(randomMole).show('slide', {direction: 'down'}, 400);

            $(randomMole).off().one('mousedown', function(){
                // $(this).effect('highlight', {color: 'red'}, 25);
                score++;
                $('#points').html(score);
                // $(this).off('mousedown');
            });
 
            setTimeout(function(){
                $(randomMole).hide('slide', {direction: 'down'}, 200);
            }, 1000);      
        }

        function animateRandomMoleTwo() {
            var random = Math.floor(Math.random() * 9);
            var moles = $('.mole');
            var randomMole = moles[random];

            console.log(random);

            $(randomMole).show('slide', {direction: 'down'}, 400).delay(1000);

            $(randomMole).off().one('mousedown', function(){
                // $(this).effect('highlight', {color: 'red'}, 25);
                score++;
                $('#points').html(score);
                // $(this).off('mousedown');
            });
 
            setTimeout(function(){
                $(randomMole).hide('slide', {direction: 'down'}, 200);
            }, 1000);      
        }

        // function animateRandomMoleTwo() {
        //     var random = Math.floor(Math.random() * 9);
        //     var moles = $('.mole');
        //     var randomMole = moles[random];

        //     $(randomMole).show('slide', {direction: 'down'}, 800).delay(500);

        //     setTimeout(function(){
        //         $(randomMole).hide('slide', {direction: 'down'}, 200);
        //     }, 1000);
        // }

        // function animateRandomMoleThree() {
        //     var random = Math.floor(Math.random() * 9);
        //     var moles = $('.mole');
        //     var randomMole = moles[random];

        //     $(randomMole).show('slide', {direction: 'down'}, 600).delay(900);

        //     setTimeout(function(){
        //         $(randomMole).hide('slide', {direction: 'down'}, 200);
        //     }, 1000);
        // }

        function animateBoard() {
            var intervalId = setInterval(function(){
                if (timer >= 0) {

                    animateRandomMoleOne();
                    animateRandomMoleTwo();
                    // animateRandomMoleThree();

                    $('#seconds').html(timer);

                    timer--;
                } else {
                    clearInterval(intervalId);
                    alert('Game Over');
                    $('#start').on('click', startGame);
                    $('#seconds').html('__');
                    $('#points').html('');
                    score = 0;
                    $('#start').removeClass('whack').html('Start');
                }
            }, 1000);
        }

    });


})();