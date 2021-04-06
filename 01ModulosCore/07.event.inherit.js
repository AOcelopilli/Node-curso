"use strict";

var EventEmitter = require("events").EventEmitter,
  inherits = require("util").inherits;

var Clock = function () {
  var self = this;

  setInterval(() => {
    //console.log("Hola");
    self.emit("tictac");
  }, 1000);
};

Clock.prototype.theTime = function () {
  var date = new Date(),
    hrs = date.getHours(),
    min = date.getMinutes(),
    sec = date.getSeconds(),
    msg = `${hrs}:${min}:${sec}`;

  console.log(msg);
};

//Heredando los eventos a las instancias
inherits(Clock, EventEmitter);

//Creando una instancia de la clase
var cucu = new Clock();

cucu.on("tictac", function () {
  cucu.theTime();
});
