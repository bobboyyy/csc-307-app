// module.js

function sum(a, b) {
  return a + b;
}

function div(a, b) {
  return a / b;
}

function containsNumbers(text) {
  for (let i = 0; i < text.length; i++) {
    const ch = text.charAt(i);
    if (ch >= '0' && ch <= '9') {
      return true;
    }
  }
  return false;
}

// default export object
export default { sum, div, containsNumbers };