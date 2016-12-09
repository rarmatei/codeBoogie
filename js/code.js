var initialDelay = 0;
var timeIncrement = 1500;
var currentTime = initialDelay;

function hoola() {
    animateImg('images/hoola.png');
}

function splits() {
    animateImg('images/splits.png');
}

function stepRight() {
    animateImg('images/move_right.png');
}

function jump() {
    animateImg('images/jump.png');
}

function stepLeft() {
    animateImg('images/move_left.png');
}

function pointLeft() {
    animateImg('images/point_left.png');
}

function pointRight() {
    animateImg('images/point_right.png');
}

function reset() {
    animateImg('images/start_dance.jpg');
    currentTime = initialDelay;
}

function animateImg(url) {
    var boogieImage = $('#boogieImg');
    setTimeout(function (){
        boogieImage.fadeOut('slow',function() {
            boogieImage.attr('src', url);
            boogieImage.fadeIn('fast');
        });
    }, currentTime);
    currentTime += timeIncrement;
}

