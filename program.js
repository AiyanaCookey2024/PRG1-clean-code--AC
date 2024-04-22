let tList = []; //

function x1(tName, tDue) {
  let t = { n: tName, d: tDue, c: false };
  tList.push(t);
}

function x2(tName) {
  tList = tList.filter(t => t.n !== tName);
}

function x3() {
  console.log("All Tasks:");
  tList.forEach(t => {
    console.log(`Task: ${t.n}, Due: ${t.d}, Completed: ${t.c}`);
  });
}

function x4(tName) {
  let tIndex = tList.findIndex(t => t.n === tName);
  if (tIndex !== -1) {
    tList[tIndex].c = true;
  } else {
    console.log("Task not found.");
  }
}


x1("Fix bug in code", "2024-02-21");
x1("Update documentation", "2024-02-22");
x3();
x4("Fix bug in code");
x2("Update documentation");
x3();
