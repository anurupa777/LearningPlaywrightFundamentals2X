function calculateJsIfElseWeightedScore(passed, failed, skipped) {
  return (passed * 2) - failed;
}

console.log(calculateJsIfElseWeightedScore(8, 3, 2));
console.log(calculateJsIfElseWeightedScore(5, 2, 1))