//                 Topic : Asynchronous
//                 Q   #  1           //
//Write a simple asynchronous TypeScript function fetchGreeting that returns a 
//greeting message after a 2-second delay using setTimeout.
function fetchGreeting() {
    setTimeout(function () {
        console.log("Hello viewers");
    }, 2000);
}
fetchGreeting();
//              Q # 2               //
//write a function simulateTask that simulates a task by logging "Task started",
//waits for 1 second, and then logs "Task completed".Use setTimeout for the delay
function simulateTask() {
    console.log("Task started");
    setTimeout(function () {
        console.log("Task completed");
    }, 1000);
}
simulateTask();
//            Q # 3                 //
//write a function fetchData that returns a promise which resolves with the string
//"Data" fetched successfully!"after a delay of 1 second.
function fetchData() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("Data fetched successfully!");
        }, 1000);
    });
}
fetchData().then(function (result) {
    console.log(result);
});
//           Q # 4               //
//write a function fetchWithError that return a Promise.It should randomly either
//resolve with "Data fetched successfully!" or reject with "Data fetch failed!"after a
//delay of 1 second. Handle the rejection using .catch
function fetchWithError() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("Data fetched successfully!"), 1000;
        });
        reject("Data fetch faied");
    });
}
fetchWithError()
    .then(function (result) {
    console.log(result);
})
    .catch(function (error) {
    console.log(error);
});
