function findFirstCriticalJsIfElseBug(bugs) {

    let bug = bugs.find(function(item) {
        return item.severity.toLowerCase() === "critical";
    });

    if (bug) {
        return bug.title;
    } else {
        return "No critical bug";
    }
}