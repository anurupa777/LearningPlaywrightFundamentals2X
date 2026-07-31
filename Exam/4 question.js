function getJsIfElseKeywordMeaning(term) {

  term = term.trim().toLowerCase();

  if (term === "success") {
    return "2xx";
  }
  else if (term === "redirect") {
    return "3xx";
  }
  else if (term === "client") {
    return "4xx";
  }
  else if (term === "server") {
    return "5xx";
  }
  else if (term === "informational") {
    return "1xx";
  }
  else {
    return "unknown";
  }

}