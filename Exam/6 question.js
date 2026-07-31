function countPassingJsIfElseChecks(results) {
  let count = 0;

  for (let result of results) {
    result = result.toLowerCase();

    if (result.includes("pass")) {
      count++;
    }
  }

  return count;
}