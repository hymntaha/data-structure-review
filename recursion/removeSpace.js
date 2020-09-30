function remove(string) {
  if (string == '') {
    return '';
  }

  if (string[0] == '\t' || string[0] == ' ') {
    return remove(string.substr(1))
  } else {
    return string[0] + remove(string.substr(1))
  }
}

console.log(remove("Hello\tWorld"))
