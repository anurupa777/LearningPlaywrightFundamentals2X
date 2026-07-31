function summarizeJsIfElseMatrix(matrix) {
  let total = 0;
  let passed = 0;
  let failed = 0;
  let failedCases = [];

  for (let row of matrix) {
    for (let result of row) {
      total++;

      if (result.endsWith("-pass")) {
        passed++;
      } else if (result.endsWith("-fail")) {
        failed++;
        failedCases.push(result);
      }
    }
  }

  return {
    total,
    passed,
    failed,
    failedCases
  };
}