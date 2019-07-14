/**
 * @author Nataliia Skrebets 
 */
/**
 * function makes a check which paremetr is bigger, and output in console all odd numbers in range
 * @param {Number} firstNumner
 * @param {Number} lastNumber
 */
/** This is a class. */
class Timer {
    /**
     * @param {String} name
     * @param {Object} setTime
     */
    constructor(name, setTime) {
        this.name = name;
        this.count = 0;
        this.setTime = 0;
    }
}
/** @type {function} start Timer */
Timer.prototype.start = function() {
        const func = () => {
            alert("Timer run for" + this.name);
        };
        this.setTime = setTimeout(func, 5 * 1000);
    }
    /** @type {function} pause Timer */
Timer.prototype.pause = function() {
        alert("Set Pausa for" + this.name);
        this.setTime = null;
    }
    /** @type {function} reset Timer */
Timer.prototype.reset = function() {
    alert("Timer Reset for" + this.name);
    clearTimeout(this.setTime);
}


let timer = new Timer("Timer_1");
let timer_2 = new Timer("Time_2");
timer.start();
timer_2.pause();
timer_2.reset();