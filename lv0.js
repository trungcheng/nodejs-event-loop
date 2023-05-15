setTimeout(function () {
    console.log('1');
}); // macro-task

new Promise(function (resolve, reject) {
    console.log('2'); // micro-task 1 execute
    resolve(3); // micro-task 2
}).then(function (val) {
    console.log(val);
});

console.log('4'); // code tổng thể

// Output:
/*
    2
    4
    3
    1
*/