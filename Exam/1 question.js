function normalizeJsIfElseLabel(label) {
  return "js-ifelse-" +
    label
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-");
}