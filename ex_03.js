function checkStatus(promise) {
 promise
 .then((result) => {
      console.log(result);  
    })
    .finally(() => {
      console.log("Checking status over");
    });
}
function promiseMe(promise) {
return new Promise((resolution) => {
resolution(`I have promise you to ${promise}`)
});
}

checkStatus ( promiseMe (" fly to the moon ") );


