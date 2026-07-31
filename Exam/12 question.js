/*- Trim each tag.
- Lowercase each tag.
- Remove blank values.
- Keep first-seen order. */
function createUniqueJsIfElseTags(tags) {
  const result = [];

  for (let tag of tags) {
    tag = tag.trim().toLowerCase();

    if (tag !== "" && !result.includes(tag)) {
      result.push(tag);
    }
  }

  return result;
}