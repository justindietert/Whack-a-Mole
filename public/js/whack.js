(function() {

    'use strict';

    $(document).ready(function() {

        var timer = 30;
        var score = 0;

        $('#start').on('click', startGame);

        function startGame(){
            // $('#prompt').removeClass('lime');
            $('#timer').html('<span id="seconds" >__</span>&nbsp;second<span id="hide-one">s</span> left');
            $('#start').off('click', startGame).addClass('whack').html('Whack!');
            $('#prompt').addClass('lime').html('Points to win: 30');
            setTimeout(function(){
                $('#prompt').removeClass('lime');
            }, 1500);

            // $('#prompt').animate({
            //     color: '#222222'
            // }, 3000);

            $('#points').html('');
            timer = 30;
            score = 0;
            animateBoard();
        }


        function animateRandomMoleOne() {
            var random = Math.floor(Math.random() * 9);
            var moles = $('.mole');
            var randomMole = moles[random];

            // console.log(random);

            $(randomMole).show('slide', {direction: 'down'}, 400);

            $(randomMole).off().one('mousedown', function(){
                // $(this).effect('bounce');
                score++;
                $('#points').html(score);
            });
 
            setTimeout(function(){
                $(randomMole).hide('slide', {direction: 'down'}, 200);
            }, 800);      
        }

        function animateRandomMoleTwo() {
            var random = Math.floor(Math.random() * 9);
            var moles = $('.mole');
            var randomMole = moles[random];

            // console.log(random);

            $(randomMole).show('slide', {direction: 'down'}, 400).delay(1000);

            $(randomMole).off().one('mousedown', function(){
                // $(this).effect('bounce');
                score++;
                $('#points').html(score);
            });
 
            setTimeout(function(){
                $(randomMole).hide('slide', {direction: 'down'}, 200);
            }, 800);      
        }

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
                if (timer > 0) {

                    animateRandomMoleOne();
                    animateRandomMoleTwo();
                    // animateRandomMoleThree();

                    $('#seconds').html(timer);
                    if (timer == 1) {
                        $('#hide-one').addClass('hide-one');
                    } else {
                        $('#hide-one').removeClass('hide-one');
                    }

                    timer--;
                } else {
                    clearInterval(intervalId);
                    $('#timer').html('Game Over<span class="emph">!</span>');
                    $('#start').on('click', startGame);
                    $('#start').removeClass('whack').html('Start').addClass('restart');
                    $('#prompt').html('Click start to play again.');

                    // need to add high score feature
                }
            }, 1000);
        }

    });


})();