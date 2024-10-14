function getID() {
  return Math.floor(Math.random() * 10000); 
}
function assignID(machineName, newSeed) {
let seed = newSeed;
return new Promise((resolve) => { 
setTimeout(() => {
const id = getID();
resolve(`${machineName} : ${id}`);
}, 500);
});
}
assignID(" Oxygen filter " , 1).then( value => { console . log ( value ) }) ;


