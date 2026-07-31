function filterSupportedJsIfElseTopics(topics) {
  let result = [];

  for (let topic of topics) {

    topic = topic.trim().toLowerCase();

    if (topic === "success" || topic === "2xx") {
      topic = "success";
    }
    else if (topic === "redirect" || topic === "3xx") {
      topic = "redirect";
    }
    else if (topic === "client" || topic === "4xx") {
      topic = "client";
    }
    else if (topic === "server" || topic === "5xx") {
      topic = "server";
    }
    else if (topic === "informational" || topic === "1xx") {
      topic = "informational";
    }
    else {
      continue; // Skip unsupported values
    }

    if (!result.includes(topic)) {
      result.push(topic);
    }
  }

  return result;
}