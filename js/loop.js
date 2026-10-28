//=========================================================================== For loop ===============================================================================================

// for(let i = 0; i < 11; i++){
//     console.log(i)
// }

//==================================================================================================

// for(let i = 10; i > 1; i--){
//     console.log(i)
// }

//==================================================================================================

// for(let i = 1; i <= 20; i++){
//     if(i % 2 === 0){
//         console.log(`even ${i}`)
//     }
// }

//================================================================================================

// for(let i = 1; i <= 20; i++){
//     if(i % 2 !== 0){
//         console.log(`odd ${i}`)
//     }
// }

//=================================================================================================

// function table(n){
//     for(let i = 1; i <= 10; i++){
//         console.log(`${n} X ${i} = ${n * i}`)
//     }
// }

// table(5)

//=================================================================================================

// let a = 0
// for(let i = 1; i <= 1000; i++){
//     a += i
   
// }
// console.log(a)

//=================================================================================================
// function findtotaldigit(n){
//    let count = 0;
//    let numString = n.toString()

//     for(let i = 0; i < numString.length; i++){
//         count++
//     }
//     return count
// }

// console.log(findtotaldigit(1323432523))

//==================================================================================================

// function findfac(n){
//     let result = 1

//     for(let i = n; i > 0; i--){
//         result *= i
//     }
//     return result
// }

// console.log(findfac(5))

//=====================================================================================================

// function findrevers(n){
//     let reversnum = "";
//     let numstring = n.toString()

//     for(let i = numstring.length - 1; i >= 0; i--){
//         reversnum += numstring[i]
//     }
//     return Number(reversnum);
// }

// console.log(findrevers(1234))

//=====================================================================================================

// function checkpali(n){
//     let numreve = "";
//     let numString = n.toString()

//     for(let i = numString.length - 1; i >= 0; i--){
//         numreve += numString[i]
//     }
//     if(n === Number(numreve)){
//         return `${n} is palindrom`
//     }else{
//         return `${n} is not palindrom`
//     }


// }

// console.log(checkpali(121))

//=====================================================================================================

// function findmiddle(n){
//     if(n < 100 || n > 999){
//         return "Invalid"
//     }

//     let tostr = n.toString();
//     let first = Number(tostr[0])
//     let second = Number(tostr[1]);
//     let third = Number(tostr[2])

//     let digit = [first,second,third]

//     let largest = true;
//     let smallest = true

//     for(let i = 0; i < digit.length; i++){
//         if(i !== 1){
//             if(second < digit[i]){
//                 largest = false
//             }
//             if(second > digit[i]){
//                 smallest = false
//             }

//         }        
//     }
//        if (largest && !smallest) {
//         return "middle is largest";
//     } else if (smallest && !largest) {
//         return "middle is smallest";
//     } else {
//         return "neither";
//     }
// }

// console.log(findmiddle(423))

//====================================================================================================================================================================

// function findsumm(n){
//     let num = 0
//     let numString = n.toString()
//     for(let i = 0; i < numString.length; i++){
//         num += Number(numString[i]);
//     }
//     return num
// }

// console.log(findsumm(123))

//====================================================================================================================================================================

// function Prime(n){
//     if(n <= 1){
//         return " Invalid"
//     }

//     for(let i = 2; i < n; i++){
//         if(n % i === 0){
//             return 'not Prime number'
//         }
        
//     }
//     return "Prime"
// }

// console.log(Prime(4))

//======================================================================================================================================================================

// function frequancy(n){
//     let freq = {}

//     for (let i = 0; i < n.length; i++){
//         let num = n[i]

//         if(freq[num]){
//             freq[num]++
//         }else{
//             freq[num] = 1
//         }

//     }
//     return freq
// }

// console.log(frequancy([1,2,3,4,4,4,5]))

//============================================================================================================================================================================

// function abc(n){
//     for(const i of n){
//         console.log(i)
//     }
// }

// abc([1,2,3,4])

//===========================================================================================================================================================================

// function abc(n){
//     for(const keys in n){
//         console.log(keys)
//         console.log(n[keys])
//     }
// }

// abc({
//     1 : "sourabh",
//     2 : "name"
// })

//============================================================================================================================================================================

// let i = 1;

// while(true){
//     console.log(i)
//     i++
// }

//============================================================================================================================================================================

// let n = 5;
// let i = 1;

// while(i <= 10){
//     console.log(`${n} X ${i} = ${n * i}`)
//     i++
// }


// let i = 1

// do{
//     console.log(i)
//     i++
// }while(i < 55)

//=============================================================================================================================================================================

// let i = [1,2,3,4,5,6,7]

// const numm = i.map((num) => {
//     return num * num
// })

// console.log(numm)
//=============================================================================================================================================================================

// function abc(n){
//     let hold = "";

//     for(let i = n.length - 1; i >= 0; i--){
//         hold += n[i]
//     }
//     return hold
// }

// console.log(abc("sourabh"))

//===========================================================================================================================================================================

// function abc(n){
//     let largest = n[0]

//     for(let i = 1; i < n.length; i++){
//         if(n[i] > largest){
//             largest = n[i]
//         }
        
//     }
//     return largest
// }

// console.log(abc([1,2,3,4,5,6]))

//==========================================================================================================================================================================

// function abc(n){
//     let smallest = n[0]

//     for(let i = 1; i < n.length; i++){
//         if(n[i] < smallest){
//             smallest = n[i]
//         }
        
//     }
//     return smallest
// }


// console.log(abc([1,2,3,4,5]))

//===========================================================================================================================================================================

// function abc(arr){
//     let largest = -Infinity;
//     let secondLargest = -Infinity

//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > largest){
//             secondLargest = largest
//             largest = arr[i]
//         }else if(arr[i] > secondLargest && arr[i] < largest){
//             secondLargest = arr[i]
//         }
//     }

//     return secondLargest
// }

// console.log(abc([1,2,3,4,5,6]))
