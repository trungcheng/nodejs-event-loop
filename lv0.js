setTimeout(() => {
    console.log('1');
}, 0); // macro-task 1 chạy cuối

new Promise((resolve, reject) => {
    console.log('2'); // micro-task 1 execute
    resolve(3);
}).then((val) => {
    console.log(val); // micro-task 2 execute
});

console.log('4'); // code tổng thể

// Output:
/*
    2
    4
    3
    1
*/