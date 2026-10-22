// ======================================================================================================

// const new1 = new Promise((resolve,reject) => {
//         resolve("Hello world");

// });

// new1.then((result) => {
//     console.log(result)
// })

// console.log("End")


// =======================================================================================================

// function checkage(age){
//     return new Promise((resolve , reject) => {
//         if(age > 18){
//             resolve("age is greater then 18")
//         }else{
//             reject("age is not greater then 18")
//         }
//     })
// }

// checkage(16)
//     .then(result => console.log(result))
//     .catch(error => console.log(error))

// ========================================================================================================

// function checkPayment(success){
//         return new Promise((resolve , reject) => {
//             setTimeout(() => {
//                 if(success === true){
//                     resolve("payment is successful")
//                 }else{
//                     reject("Payment failed")
//                 }
//             },2000)
//         })

// }

// checkPayment(true)
//         .then(result => console.log(result))
//         .catch(error => console.log(error))

 // ================================================================= callback hell =============================================

//  function first(callback){
//     callback()
//  }

//  function second(callback){
//     callback()
//  }

//  function third(){
//     console.log("hello")
//  }

// first(() => {
//     second(() => {
//         third(() => {})
//     })
// })


// =================================================================

// function user(age){
//     return new Promise((resolve , reject) => {
//         if(age === 18){
//             resolve("he is 18 years old")
//         }else{
//             reject("he is not 18 years old")
//         }
//     })
// }

// user(59)
//     .then((result) => {
//         console.log(result)
//     })
//     .catch((err) => {
//         console.log(err)
//     })

// ============================================================================ Promise chaining ===================================

    // Promise.resolve(5).then((num) => {
    //         return num * 2;
    //     })

    //     .then((result) => {
    //         return result * 10
    //     })

    //     .then((finalresult) => {
    //         console.log(finalresult)
    //     })


// ======================================================================== without return ===========================================\

// Promise.resolve(5)
//     .then((num) => {
//         return num + 5;
//     })

//     .then((result) => {
//         result * 2
//     })

//     .then((finalresult) => {
//         console.log(finalresult)
//     })


// ===========================================================================================================================

// Promise.resolve(3)
//         .then((num) => {
//             return num + 7
//         })

//         .then((result) => {
//             return result * 2
//         })

//         .then((finalresult) => {
//             console.log(finalresult)
//         })

// =================================================================================== Promise chaining with object ===========================

// Promise.resolve({name : "rahul" , age : 30})
//             .then((user) => {
//                 return user.name
//             } )

//             .then((result) => {
//                 console.log(result)
//             })


// ================================================================ Promise chaining ke andar Promise return karna =============================

// function getId(){
//     return Promise.resolve("101")
// }

// function getDetailFetched(id){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             resolve({id : id , name : "rahul"})
//         })
//     },5000)
// }

// getId()
//     .then((result) => 
//         getDetailFetched(result)
//     )
//     .then((user) => 
//     {
//         console.log(user.name)
//     })

// ================================================================================= promise with error throw and caching ============================================

// Promise.reject("error A")
    // .catch((error) => {console.log(error)
    //     throw new Error("Error B")})
    

    // .catch((error) => {console.log(error.message)
    //  return "fixed"})
    
    // .then((result) => {
    //     console.log(result)
    // })

// ============================================================================= Promise method ==========================================================================

// ===================================================================== Promise.all() ===============================================================================

// const p1 = Promise.resolve("order")
// const p2 = Promise.resolve("packed")
// const p3 = Promise.resolve("get")

// Promise.all([p1,p2,p3])
//     .then((result) => {
//         console.log(result)
//     })
//     .catch((error) => {
//         console.log(error)
//     })

// ========================================================================== Promise all with rejection ==========================================================

// const p1 = Promise.resolve("100")
// const p2 = Promise.resolve("200")
// const p3 = Promise.reject("error")

// const p1 = Promise.resolve("100")
// const p2 = Promise.reject("error")                2 differnet different example
// const p3 = Promise.resolve("200")

// Promise.all([p1,p2,p3])
//         .then((result) => {
//             console.log(result)
//         })

//         .catch((error) => {
//             console.log(error)
//         })


// =================================================================================================================================================================

// const p1 = Promise.resolve(10);
// const p2 = Promise.resolve(20);
// const p3 = Promise.resolve(30);

// Promise.all([p1,p2,p3])
//     .then((result) => {
//         const total = result.reduce((sum,num) => sum + num , 0)
//         console.log(total)
//     })

//     .catch((error) => {
//         console.log(error)
//     })

// ===================================================================================================================================================================

// const p1 = Promise.resolve(499);
// const p2 = Promise.resolve(799);
// const p3 = Promise.resolve(299);

// Promise.all([p1 , p2 ,p3])
//         .then((result) => {
//             const total = result.reduce((sum,num) => sum + num , 0)
//             if(total > 1000){
//                 console.log("Expensive order")
//             }else{
//                 console.log("Affordable order")
//             }
//         })
//         .catch((error) => {
//             console.log(error)
//         })


// Promise.resolve(5)
//     .then((num) => {
//         return num * 2
//     })

//     .then((result) => {
//         console.log(result)
//     })

//=====================================================================================================================================================================

// ===================================================================== Promise.allsettled() =========================================================================

// const p1 = Promise.resolve("hello");
// const p2 = Promise.reject("not in a mood");
// const p3 = Promise.resolve("bye")

// Promise.allSettled([p1,p2,p3])
//     .then((result) => {
//         console.log(result)
//     })

//     .catch((err) => {
//         console.log(err)
//     })

// ==================================================================================================================================================================

// Promise.allSettled([
//     Promise.resolve("success"),
//     Promise.reject("Failed")
// ])

// .then((result) => {
//     console.log(result[1].status)
// })

//====================================================================================================================================================================

// const p1 = Promise.resolve(100);
// const p2 = Promise.reject("Payment failed");
// const p3 = Promise.resolve(300);

// Promise.allSettled([p1,p2,p3])
//     .then((results) => {
//         results.forEach((result) => {console.log(result.status)
//             console.log(result.status);
//              if(result.status === "fulfilled"){
//             console.log(result.value)
//         }else{
//             console.log(result.reason)
//         }
//         })
       
//     })

// ============================================================================ Promise Race ===================================================================================

// const p1 = new Promise(resolve => resolve("Promise 1") , 2000);

// const p2 = new Promise(resolve => resolve("Promise 2") , 1000)

// Promise.race([p1,p2])
//         .then((result) => {
//             console.log(result)
//         })


// ===============================================================================================================================================================================

// const p1 = new Promise(reject => reject("bye"), 2000);

// const p2 = new Promise(resolve => resolve("hello") , 3000);

// Promise.race([p1,p2])
//         .then((result) => {
//             console.log(result)
//         })

// =================================================================================================================================================================================

// const p1 = new Promise(resolve => setTimeout(() => 

//     resolve("User data loaded"),2000)

// )

// const p2 = new Promise(reject =>setTimeout(() => reject("Request timeout"),1000)) 

// Promise.race([p1,p2])
//         .then((result) => {
//             console.log(result)
//         })

//         .catch((err) => {
//             console.log(err)
//         })

// =================================================================================== Promise any ==========================================================================================

// const p1 = new Promise((resolve , reject) => {
//     reject("hello")
// })

// const p2 = new Promise((resolve , reject) => {
//     setTimeout(() => {
//         resolve("hello world")
//     },3000)
// })

// Promise.any([p1,p2])
//         .then((result) => {
//             console.log(result)
//         })

