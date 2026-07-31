function summarizeJsIfElseResults(results) {
  let passed = 0;
  let failed = 0;
  let skipped = 0;

  for (let result of results) {
    result = result.toLowerCase();

    if (result.includes("pass")) {
      passed++;
    } 
    else if (result.includes("fail")) {
      failed++;
    } 
    else if (result.includes("skip")) {
      skipped++;
    }
  }

  return {
    total: results.length,
    passed: passed,
    failed: failed,
    skipped: skipped
  };
}