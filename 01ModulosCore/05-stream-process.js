"use strict";

var stdin = process.stdin,
  stdout = process.stdout,
  person = {
    name: null,
    age: 0,
  };

function saveAge(age) {
  person.age = age;

  if (person.age < 18) {
    stdout.write(
      person.name + " eres menor de edad, tienes " + person.age + " anios."
    );
  } else if (person.age >= 18) {
    stdout.write(
      person.name + " eres mayor de edad, tienes " + person.age + " anios.\n"
    );
  }

  process.exit();
}

function saveName(name) {
  person.name = name;
  var question = "Hola " + person.name + "Cuantos anios tienes?";

  quiz(question, saveAge);
}

function quiz(question, callback) {
  stdin.resume();
  stdout.write(question + ": ");

  stdin.once("data", function (res) {
    callback(res.toString().trim());
  });
}

stdin.setEncoding("utf8");
quiz("Como te llamas?", saveName);
