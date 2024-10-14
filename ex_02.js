function checkFuel(fuel) {
return new Promise ((fulfilled,rejected) => {
if (fuel >= 9){
fulfilled(`Ready to launch`);
}
else {
rejected('Please refill fuel')
}
});
} 

checkFuel(13).then((message) => {
console.log(message);
})
.catch((error) => {
console.log(error);
});
