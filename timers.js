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
        //Stop the timer and set its value back to 0
        clearInterval(timer.timerId);
        timer.timerId = 0;
        //Clear the secs counter
        timer.seconds = 0;
        document.getElementById('timer').innerHTML = 'Stop Watch';
    });

    startBtn.addEventListener('click', function(){
        //Only start the timer if it is not already started
        if(timer.timerId == 0) {
            //Call increment timer every 1 sec (1000 milisec)setInter
            timer.timerId = setInterval(timer.updateTime.bind(timer), 1000);
        }else{
            console.log('Ignored click as timer already started');
        }

    });

    pauseBtn.addEventListener('click', function(){
        clearInterval(timer.timerId);
        //If timer is stopped set the timerId to 0 so that it can be started again.
        timer.timerId = 0;
    });

}

init();