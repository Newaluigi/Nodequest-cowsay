

const wilder = require("./information");

const cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: `Hello, I'm ${wilder.name} from ${wilder.campus} Campus`,
    e: "oO",
    T: "U ",
  })
);
