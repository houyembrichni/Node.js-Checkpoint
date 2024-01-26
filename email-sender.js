const nodemailer = require("nodemailer");
require("dotenv").config();
let password = process.env.password;
const transporter = nodemailer.createTransport({
  host: "smtp.office365.com",
  port: 587,
  secure: false,
  auth: {
    user: "houyembrchni123@outlook.com",
    pass: password,
  },
});

async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Fred Foo " <houyembrchni123@outlook.com>', // sender address
    to: "brichnihouyem908@gmail.com", // list of receivers
    subject: "NODE TEST ✔", // Subject line
    text: "HELLO Houyem THIS EMAIL IS FROM HOUYEM", // plain text body
    html: `<h1>Hello HOUYEM </h1>`,
    //     <!DOCTYPE html>
    // <html lang="en">
    //   <head>
    //     <meta charset="UTF-8" />
    //     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    //     <title>Document</title>
    //   </head>
    //   <body>
    //     <h1 style="color: red">CONGRATS!!!! YOU WIN A 1000 $</h1>
    //     <button>Click here to catch up yuour money</button>
    //     <img
    //       src="https://img.etimg.com/thumb/width-1200,height-900,imgsize-78616,resizemode-75,msid-96257330/news/how-to/whats-the-hedge-funds-and-how-do-they-generate-money.jpg"
    //       alt=""
    //     />
    //   </body>
    // </html>
    // // html body
  });

  console.log("Message sent: %s", info.messageId);
  console.log("Email was sent successfully");
}

main().catch(console.error);
