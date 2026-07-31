function isValidJsIfElseIdentifier(name) {

  const reserved = ["if", "else", "return", "true", "false", "null"];
  
  if (typeof name !== "string") {
    return false;
  }

  name = name.trim();

  if (name === "") {
    return false;
  }

 

  if (reserved.includes(name)) {
    return false;
  }

  if (!/^[A-Za-z_$][A-Za-z0-9_$]*$/.test(name)) {
    return false;
  } else {
    return true;
  }
}