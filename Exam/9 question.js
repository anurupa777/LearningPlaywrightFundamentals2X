function buildJsIfElseRunLabel(suiteName, environment, buildNumber) {
    suiteName = suiteName.trim();
    environment = environment.trim().toLowerCase();

    return suiteName + " | " + environment + " | build-" + buildNumber;
}