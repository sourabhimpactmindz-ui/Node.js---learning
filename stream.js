import fs from 'fs';
import { Duplex } from 'stream';

//=========================================================================== Read Stream========================================================================================
// const stream = fs.createReadStream('input.txt' , 'utf8');

// stream.on("data" , (data) => {
//     console.log(data)
// });


//============================================================================write Stream=======================================================================================
// const stream = fs.createWriteStream('input.txt',{flags : 'a'});


// stream.write("\nhello world" )

// stream.end()

// stream.on("finish" , () => {
//     console.log("successfully write")
// })

//=========================================================================pipe=====================================================================================================
// const reademitter = fs.createReadStream('input.txt');

// const writemitter = fs.createWriteStream('output.txt');

// reademitter.pipe(writemitter)

// writemitter.on("finish" , () => {
//     console.log("file copied successfully")
// })

//======================================================================Duplex Stream===============================================================================================

// const chatStream = new Duplex({
//     read() {
//         this.push("Server : Hello from the server")
//         this.push(null)
//     },

//     write(chunk , encoding , callback){
//         console.log("Client :" , chunk.toString());
//         callback();
//     }

   
// })

//  chatStream.write("hello Server!");

//  chatStream.on("data" , (chunk) => {
//     console.log("client recived :" ,chunk.toString())
//  })


//=======================================================================Transform======================================================================================================


