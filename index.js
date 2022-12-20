

var cowsay = require("cowsay");
const userInfo = require("./information")


console.log(cowsay.say({
    text : "I'm ${userInfo.firstName} from ${userInfo.campus} Campus !",
    e : "oO",
    T : "U "
}));
