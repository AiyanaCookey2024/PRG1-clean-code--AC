let tList = []; 

function createTask(tName, tDue) {
 let t = { n: tName, d: tDue, c: false }
 console.log("createTask " + t.n)
  tList.push(t);
  
}

function removeTask(tName) {
  tList = tList.filter(t => t.n !== tName); //this is just removing the name 
}

function printAllTasks() {
  console.log("All Tasks:");
  tList.forEach(t => {
    console.log(`Task: ${t.n}, Due: ${t.d}, Completed: ${t.c}`);
  });
}

function completeTask(tName) {
  let tIndex = tList.findIndex(t => t.n === tName);
  if (tIndex !== -1) {
    tList[tIndex].c = true;
  } else {
    console.log("Task not found.");
  }
}


createTask("Fix bug in code", "2024-02-21");
createTask("Update documentation", "2024-02-22");
printAllTasks();
completeTask("Fix bug in code");
removeTask("Update documentation");
printAllTasks();