function toCamelCase(text: string) {
  return text.replace(/-\\w/g, clearAndUpper);
}

function toPascalCase(text: string) {
  return text.replace(/(^\\w|-\\w)/g, clearAndUpper);
}

function clearAndUpper(text: string) {
  return text.replace(/-/,"").toUpperCase();
}