console.log('0'); // code tổng thể

setTimeout(() => {
    console.log('1');
}, 0); // macro-task 1 chạy cuối

new Promise((resolve, reject) => {
    console.log('2'); // micro-task 1 execute
    resolve(3);
}).then((val) => {
    console.log(val); // micro-task 3 execute
}).then(() => {
    console.log('then...1'); // micro-task 5 execute
});

new Promise((resolve, reject) => {
    console.log('4'); // micro-task 2 execute
    resolve(5);
}).then((val) => {
    console.log(val); // micro-task 4 execute
}).then(() => {
    console.log('then...2'); // micro-task 6 execute
});

setTimeout(() => {
    console.log('7');
}, 0); // macro-task 2 chạy cuối

console.log('6'); // code tổng thể

// Output:
/*
    0
    2
    4
    6
    3
    5
    then...1
    then...2
    1
    7
*/