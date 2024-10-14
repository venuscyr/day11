function worker(task, timeRequired) {
return new Promise((resolve) => { 
setTimeout(() => {
 resolve(`${task} done`);
    }, timeRequired);
});
}
function Promiseasyncfactory(tasks) {
  for (let i = 0; i < tasks.tasks.length; i++) {
    let currentTask = tasks.tasks[i];
    
    worker(currentTask.task, currentTask.timeRequired).then((result) => {
      console.log(result); 
    });
  }
}
let tasks = {
  'tasks': [
    { 'task': 'Teaching Astronomy', 'timeRequired': 500 },
    { 'task': 'Refill fuel', 'timeRequired': 1500 },
    { 'task': 'Repair module', 'timeRequired': 1000 },
    { 'task': 'Going to work', 'timeRequired': 1000 },
  ]
};

Promiseasyncfactory(tasks); 

