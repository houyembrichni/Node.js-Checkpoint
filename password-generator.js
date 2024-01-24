var generator = require("generate-password");

var password = generator.generate({
  length: 20,
  numbers: true,
  uppercase: true,
  symbols:true,
  strict:true,

});

console.log(password);
