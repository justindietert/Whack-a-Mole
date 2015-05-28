(function() {

    'use strict';

    $(document).ready(function() {

        var timer = 30;
        var score = 0;

        var audioOne = $('#audio-one')[0];
        var audioTwo = $('#audio-two')[0];
        var audioWin = $('#audio-win')[0];
        var audioLose = $('#audio-lose')[0];

        function playAudioOne() {
            audioOne.play();
        }

        function playAudioTwo() {
            audioTwo.play();
        }

        function playAudioWin() {
            audioWin.play();
        }

        function playAudioLose() {
            audioLose.play();
        }

        $('#start').on('click', startGame);

        function startGame(){
            $('#timer').html('<span id="seconds" >__</span>&nbsp;second<span id="hide-one">s</span> left');
            $('#start').off('click', startGame).addClass('whack').html('Whack!');
            $('#prompt').addClass('lime').html('Points to win: 30 or more');

            setTimeout(function(){
                $('#prompt').removeClass('lime');
            }, 1500);

            $('#points').html('');
            timer = 30;
            score = 0;
            animateBoard();
            playAudioTwo();
        }

        function animateRandomMoleOne() {
            var random = Math.floor(Math.random() * 9);
            var moles = $('.mole');
            var randomMole = moles[random];

            $(randomMole).show('slide', {direction: 'down'}, 400);

            $(randomMole).off().one('mousedown', function(){
                score++;
                $('#points').html(score);
                playAudioOne();
            });

            setTimeout(function(){
                $(randomMole).hide('slide', {direction: 'down'}, 200);
            }, 800);
        }

        function animateRandomMoleTwo() {
            var random = Math.floor(Math.random() * 9);
            var moles = $('.mole');
            var randomMole = moles[random];

            $(randomMole).show('slide', {direction: 'down'}, 400).delay(1000);

            $(randomMole).off().one('mousedown', function(){
                score++;
                $('#points').html(score);
                playAudioOne();
            });

            setTimeout(function(){
                $(randomMole).hide('slide', {direction: 'down'}, 200);
            }, 800);
        }

        function animateBoard() {
            var intervalId = setInterval(function(){
                if (timer > 0) {

                    animateRandomMoleOne();
                    animateRandomMoleTwo();

                    $('#seconds').html(timer);
                    if (timer == 1) {
                        $('#hide-one').addClass('hide-one');
                    } else {
                        $('#hide-one').removeClass('hide-one');
                    }

                    timer--;
                } else {
                    clearInterval(intervalId);
                    $('#timer').html('Time&rsquo;s up<span class="emph">!</span>');
                    $('#start').on('click', startGame);
                    $('#start').removeClass('whack').html('Start').addClass('restart');
                    $('#prompt').html('Click start to play again.');

                    if (score >= 30) {
                        playAudioWin();
                        $('#winModal').foundation('reveal', 'open');
                    } else {
                        playAudioLose();
                        $('#loseModal').foundation('reveal', 'open');
                    }
                }
            }, 1000);
        }

    });


})();
