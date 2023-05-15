setTimeout(() => console.log("timeout"), 0); // macro-task 1

setImmediate(() => console.log("immediate")); // macro-task 2

process.nextTick(() => console.log("nextTick")); // micro-task 2 execute

new Promise((resolve, reject) => {
    console.log('promise'); // micro-task 1 execute
    resolve('promise resolve');
}).then((val) => {
    console.log(val); // micro-task 3 execute
});

console.log("ahihi"); // code tổng thể

// Output:
/*
    promise
    ahihi
    nextTick
    promise resolve
    timeout
    immediate
*/