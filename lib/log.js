
const _black   = '\u001b[30m';
const _red     = '\u001b[31m';
const _green   = '\u001b[32m';
const _yellow  = '\u001b[33m';
const _blue    = '\u001b[34m';
const _magenta = '\u001b[35m';
const _cyan    = '\u001b[36m';
const _white   = '\u001b[37m';

const _reset   = '\u001b[0m';

const red = (text) => {
  console.log(_red + text + _reset);
}

const green = (text) => {
  console.log(_green + text + _reset);
}
const yellow = (text) => {
  console.log(_yellow + text + _reset);
}

module.exports = {
  red,
  green,
  yellow,
}