const fs = require("fs");
fs.writeFile("./welcome.txt", "Hello Node", (err) => {
  if (err) {
    console.log(err);
  }
});
fs.readFile("./Hello.txt", 'utf-8',(err,data) =>{
    if (data){
        console.log(data)
    }
    else{
        console.log(err)
    }

})