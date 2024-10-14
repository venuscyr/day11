function promiseMe(promise) {
return new Promise((resolution) => {
resolution(`I have promise you to ${promise}`)
});
}
promiseMe ("fly to the moon ").then (( value ) => {
console.log( value ) ;
}) ;
