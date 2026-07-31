function checkJsIfElseReadinessGate(hasSetup, hasPractice, hasNotes) {
  if (
    hasSetup === true &&
    hasPractice === true &&
    hasNotes === true
  ) {
    return "READY";
  } else {
    return "BLOCKED";
  }
}