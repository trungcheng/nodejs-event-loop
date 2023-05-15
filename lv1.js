console.log('0'); // code tổng thể

setTimeout(function () {
    console.log('1');
}); // macro-task 1 chạy cuối

new Promise(function (resolve, reject) {
    console.log('2'); // micro-task 1 execute
    resolve(3);
}).then(function (val) {
    console.log(val); // micro-task 3 execute
}).then(function () {
    console.log('then...1'); // micro-task 5 execute
});

new Promise(function (resolve, reject) {
    console.log('4'); // micro-task 2 execute
    resolve(5);
}).then(function (val) {
    console.log(val); // micro-task 4 execute
}).then(function () {
    console.log('then...2'); // micro-task 6 execute
});

setTimeout(function () {
    console.log('7');
}); // macro-task 2 chạy cuối

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