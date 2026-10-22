
// function events(){
//     console.log("start");

//     Promise.resolve().then(() => {
//         console.log("hello world");
//     })

//     setTimeout(() => {
//         console.log("micro task");
//     },1000);

//     console.log("end");

// }

// events();

// ===================================================================================================

// async function first(){
//     console.log("first start");
//     await Promise.resolve()
//     console.log("first end");

// } 

// async function second(){
//     console.log("second start");
//     await first()
//     console.log("second end")
// }
// second();
// console.log("Global")

//======================================================================================================

// console.log("start");

// setTimeout(() => {
//     console.log("timer 1");

//     Promise.resolve().then(() => {
//         console.log("promise 1")
//     })
// },0)

// setTimeout(() => {
//     console.log("Timer 2")
// },0);

// Promise.resolve().then(() => {
//     console.log("Promise 2")
// })

// console.log("End")

//========================================================================================================


// console.log("start")

// setTimeout(() => {
//     console.log("timer 1")

//     Promise.resolve().then(() => {
//         console.log("promise 1")

//         process.nextTick(() => {
//             console.log("first tick")
//         })
//     })

// },0)

// setTimeout(() => {
//     Promise.resolve().then(() => {
//         console.log("promise 2")
//     })

//     queueMicrotask(() => {
//         console.log("queuemicrotask")
//     })
// })

// Promise.resolve().then(() => {
//     console.log("promise 3")
// })

// process.nextTick(() => {
//     console.log("second tick")
// })

// console.log("end")

// ============================================================================================================

// console.log("start")

// async function first(){
//     console.log("start first")

//     await Promise.resolve()
//     console.log("first promise")

// }

// async function second(){
//     console.log("second start")

//     await first()

//     setTimeout(()=>{
//         console.log("first set")

//         Promise.resolve().then(() => {
//             console.log("second promiose")
//         })

//         process.nextTick(() => {
//             console.log("first tick")
//         })
//     },0)
// }

// Promise.resolve().then(() => {
//     console.log("promise 3")
// })

// queueMicrotask(() => {
//     console.log("first microtask")
// })


// second()
// console.log("end")

// ===================================================================================================

// console.log("start")

// Promise.resolve().then(() => {
//     console.log("hello")

//     process.nextTick(() => {
//         console.log("Tick")
//     })
// })

// Promise.resolve().then(() => {
//     console.log("byee")
// })

// console.log("end")