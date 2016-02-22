/**
 * Created by lnfra on 22/2/16.
 */

var timer = {
    timerId: 0,
    seconds: 0,
    updateTime: function() {
        this.seconds++;
        document.getElementById('timer').innerHTML= 'Time elapsed: ' + this.seconds;
    }
}


function init() {

    //Get buttons with selector
    var resetBtn = document.getElementById('reset');
    var startBtn = document.getElementById('start');
    var pauseBtn = document.getElementById('pause');

    //Add listeners
    resetBtn.addEventListener('click', function(){
        //Stop the timer
        clearInterval(timer.timerId);
        //Clear the secs counter
        timer.seconds = 0;
        document.getElementById('timer').innerHTML = 'Stop Watch';
    });

    startBtn.addEventListener('click', function(){
        //Call increment timer every 1 sec (1000 milisec)setInter
        timer.timerId = setInterval(timer.updateTime.bind(timer), 1000);

    });

    pauseBtn.addEventListener('click', function(){
        //Stop the secs counter
        clearInterval(timer.timerId);
    });

}

init();