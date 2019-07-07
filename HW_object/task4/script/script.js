function Timer(name, setTime) {
    this.name = name;
    this.count = 0;
    this.setTime = 0;
}

Timer.prototype.start = function() {
    const func = () => {
        alert("Timer run for" + this.name);
    };
    this.setTime = setTimeout(func, 5 * 1000);
}
Timer.prototype.pause = function() {
    alert("Set Pausa for" + this.name);
    this.setTime = null;
}

Timer.prototype.reset = function() {
    alert("Timer Reset for" + this.name);
    clearTimeout(this.setTime);
}


var timer = new Timer("Timer_1");
var timer_2 = new Timer("Time_2");
timer.start();
timer_2.pause();
timer_2.reset();