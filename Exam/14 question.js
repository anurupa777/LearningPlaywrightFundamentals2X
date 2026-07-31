function buildJsIfElseChecklist(items) {
    let checklist = [];
  let count = 1;

  for (let task of items) {
    task = task.trim();

    if (task !== "") {
      checklist.push(`${count}. ${task} - TODO`);
      count++;
    }
  }

  return checklist;
} 
