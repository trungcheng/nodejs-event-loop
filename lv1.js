console.log('0'); // code tổng thể

setTimeout(function () {
    console.log('1');
}); // macro-task

new Promise(function (resolve, reject) {
    console.log('2'); // execute
    resolve(3); // micro-task
}).then(function (val) {
    console.log(val);
}).then(function () {
    console.log('then...1');
});

new Promise(function (resolve, reject) {
    console.log('4'); // execute
    resolve(5); // micro-task
}).then(function (val) {
    console.log(val);
}).then(function () {
    console.log('then...2');
});

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
*/