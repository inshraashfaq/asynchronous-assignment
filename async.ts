//                 Topic : Asynchronous
//                 Q   #  1           //
//Write a simple asynchronous TypeScript function fetchGreeting that returns a 
//greeting message after a 2-second delay using setTimeout.
function fetchGreeting(){
    setTimeout(() => {
        console.log("Hello viewers");
    }, 2000);
}
fetchGreeting();  
//              Q # 2               //
//write a function simulateTask that simulates a task by logging "Task started",
//waits for 1 second, and then logs "Task completed".Use setTimeout for the delay
function simulateTask(){
    console.log("Task started");
    setTimeout(() =>{
        console.log("Task completed");
    }, 1000);
}  
simulateTask();        
//            Q # 3                 //
//write a function fetchData that returns a promise which resolves with the string
//"Data" fetched successfully!"after a delay of 1 second.
function fetchData(){
    return new Promise((resolve,reject) => {
        setTimeout(() =>{
            resolve("Data fetched successfully!");
        }, 1000);
    });
}
fetchData().then((result) => {
    console.log(result);
});   
//           Q # 4               //
//write a function fetchWithError that return a Promise.It should randomly either
//resolve with "Data fetched successfully!" or reject with "Data fetch failed!"after a
//delay of 1 second. Handle the rejection using .catch
function fetchWithError(){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched successfully!"),1000;
        });
        reject("Data fetch faied");
    });
}
     fetchWithError()
     .then((result) =>{
        console.log(result);
     })
     .catch((error) =>{
        console.log(error);
     });                
//             Q # 5            //
//write a function executeSequentially that executes two function fetchData and
//processData sequentially using promises, and logs the results in the order they are
//called.
function fetchData1(){
    return new Promise((resolve, reject) => {
        resolve("Assignment completed!");
    });
} 
function processData(){
    return new Promise((resolve, reject) => {
        reject("Assignment not completed");
    });
}
function executeSequentially(){
    fetchData().then((result)=> {
        console.log(result);
        processData().catch((error) =>{
            console.log(error);
        });
    });
} 
executeSequentially();   