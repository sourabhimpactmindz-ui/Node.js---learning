
// function sayhello(){
//     console.log("sayhello")
// }
// function saybye(){
//     console.log("saybye")
// }
// function saylogin(){
//     console.log("saylogin")
// }

// function cheack(callback){                           // callback use as a refrernce of other functions like saybye sayhello etc
//     console.log("Proceesed")
//     callback()
// }

// cheack(saybye)

// ============================================================================ callback with parameter =========================================================================

// function calculate(a,b,callback){
//     const result = a + b;
//     callback(result)
// }

// function getaddition(value){
//     console.log("Result : " , value)
// }

// calculate(20,30,getaddition)


// ============================================================================== synchronous callback ============================================================================

// function chackfun(callback){
//     console.log('progressed')
//     callback()
// }

// chackfun(() => {
//     console.log("say hello")
// })

// console.log("finished")

// ============================================================================ asynchronous callback =============================================================================

// console.log("hello")

// setTimeout(() => {
//     console.log("it is take some time")
// },3000)

// console.log("finish")

// ========================================================================= callback hell =======================================================================================

// loginuser(function(user){
//     getuser((user.id) , function(profile){
//         readuser((profile.id) , function(readuser){
//             deleteuser((readuser.id) , function(result){
//                 console.log("result")
//             })
//         })
//     })
// })

// ============================================================================== Practice questions =================================================================================

// print hello and wellcome message 

// function check(callback){
//     console.log("hello")
//     callback()
// }

// function welcomemes(){
//     console.log("welcome to my ne vlog")
// }

// check(welcomemes)

// =======================================================================

// calculate(a, b, callback) function banao jo do numbers ko add kare aur result callback ko pass kare.

// function calculate(a,b,callback){
//     const result = a + b;
//     callback(result)
// }

// function getvalue(value){
//     console.log("my result is : " , value)
// }

// calculate(10,20,getvalue)

// ==========================================================================

// find square and addition 

// function addition(a,b){
//       return a * b
   
// }

// function multiply(a,b){
//         return a / b;
    
// }
// function cheackans(a,b,callback){
//     const result = callback(a,b)
//     console.log(result)
// }

// cheackans(10,15,multiply)
// cheackans(10,15,addition)

// ============================================================= Sqaure and double

// function addition(a){
//     const result = a * 2
//     console.log(result)
// }

// function multiply(a){
//     const result = a * a * a;
//     console.log(result)
// }


// function cheackans(a,callback){
//     callback(a)
// }

// cheackans(5,multiply)
// cheackans(5,addition)

//================================================================

// function subtract(a,b){
//     return a - b
// }

// function divied(a,b){
//     return a / b

// }

// function calculate(a,b,callback){
//     const result = callback(a,b)
//     console.log("result :" , result)
// }

// calculate(20,5 , subtract);
// calculate(20,5,divied)


//===========================================================

// function processOrder(orderId,callback){
//               callback(orderId)
// }

// function detail(idcheck){
//      console.log(`Order ${idcheck} completed`)
// }

// processOrder(101 , detail)

//======================================================================================================================

// function divide(a,b,callback){
//     if(b === 0){
//         callback("cannot divide by zero " , null);
//     }else {
//         const result = a / b;
//         callback(null , result)
//     }
// }

// function handleResult(error,result){
//     if(error){
//         console.log("error : " , error)
//     }else{
//         console.log("result : ", result)
//     }
// }

// divide(4,4 , handleResult)

//======================================================================================================================

// function first(callback){
//     console.log("A")

//     setTimeout(() => {
//         callback()
//     })

//     console.log("B")
// }

// function second(){
//     console.log("C")
// }

// first(second)

// console.log("D")

//==================================================================================================================


set