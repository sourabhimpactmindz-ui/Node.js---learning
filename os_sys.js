import os, { totalmem } from 'os';

console.log(os.platform())
console.log(os.arch())
// console.log(os.cpus())
console.log(os.totalmem())

const totalMemory = os.totalmem() / 1024 / 1024 / 1024;

console.log(totalMemory + " GB");

const freeMemory = os.freemem() /1024/1024/1024;

console.log(freeMemory + "GB");