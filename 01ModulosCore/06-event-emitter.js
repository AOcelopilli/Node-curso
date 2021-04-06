"use strict";

var EveEmi = require("events").EventEmitter,
  pub = new EveEmi();

pub
  .on("myevent", function (message) {
    console.log(message);
  })
  .once("myevent", function (message) {
    console.log("Se Emite una unica vez: " + message);
  });

pub.emit("myevent", "Soy un emisor de eventos");
pub.emit("myevent", "Segunda emision del evento");
pub.removeAllListeners("myevent");
pub.emit("myevent", "Tercera emision del evento");
