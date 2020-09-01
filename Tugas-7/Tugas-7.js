// soal 1
// release 0
class Animal {
    constructor(name) {
        this._name = name;
        this._legs = 4;
        this._cold_blooded = false;
    }
    get name() {
        return this._name;
    }
    set name(param) {
        this._name = param;
    }
    get legs() {
        return this._legs;
    }
    set legs(param) {
        this._legs = param;
    }
    get cold_blooded() {
        return this._cold_blooded;
    }
    set cold_blooded(param) {
        this.cold_blooded = param;
    }
    // Code class di sini
}
var sheep = new Animal("shaun");
console.log(sheep.name);
console.log(sheep.legs);
console.log(sheep.cold_blooded);

// release 1

class Frog extends Animal {
    constructor(param) {
        super(param);
        this.legs = 2;
    }
    jump() {
        console.log("hop hop");
    }
}
class Ape extends Animal {
    constructor(param) {
        super(param);
        this.legs = 2;
    }
    yell() {
        console.log("Auooo");
    }
}
var sungokong = new Ape("kera sakti");
sungokong.yell();

var kodok = new Frog("buduk");
kodok.jump();

// soal 2

class Clock {
    constructor({ template }) {
        this.timer;
        this.template = template;
    }
    render() {
        var date = new Date();

        var hours = date.getHours();
        if (hours < 10) hours = "0" + hours;

        var mins = date.getMinutes();
        if (mins < 10) mins = "0" + mins;

        var secs = date.getSeconds();
        if (secs < 10) secs = "0" + secs;
        var output = this.template
            .replace("h", hours)
            .replace("m", mins)
            .replace("s", secs);

        console.log(output);
    }
    stop() {
        clearInterval(timer);
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }
}
var clock = new Clock({ template: "h:m:s" });
clock.start();
