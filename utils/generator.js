// PassGen - Ortak Sifre Uretici Modulu (crypto.getRandomValues ile)
const CHARSETS = {
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  symbols: "!@#$%^&*()_+-=[]{}|;:,.<>?"
};

const DEFAULT_OPTIONS = {
  length: 16,
  uppercase: true,
  lowercase: true,
  numbers: true,
  symbols: true
};

function getRandomInt(max) {
  const buf = new Uint32Array(1);
  crypto.getRandomValues(buf);
  return buf[0] % max;
}

function generatePassword(options) {
  const opts = Object.assign({}, DEFAULT_OPTIONS, options);
  let available = "";
  const guaranteed = [];

  if (opts.uppercase) {
    available += CHARSETS.uppercase;
    guaranteed.push(CHARSETS.uppercase[getRandomInt(CHARSETS.uppercase.length)]);
  }
  if (opts.lowercase) {
    available += CHARSETS.lowercase;
    guaranteed.push(CHARSETS.lowercase[getRandomInt(CHARSETS.lowercase.length)]);
  }
  if (opts.numbers) {
    available += CHARSETS.numbers;
    guaranteed.push(CHARSETS.numbers[getRandomInt(CHARSETS.numbers.length)]);
  }
  if (opts.symbols) {
    available += CHARSETS.symbols;
    guaranteed.push(CHARSETS.symbols[getRandomInt(CHARSETS.symbols.length)]);
  }

  if (available.length === 0) {
    available = CHARSETS.lowercase + CHARSETS.numbers;
    guaranteed.push(CHARSETS.lowercase[getRandomInt(CHARSETS.lowercase.length)]);
  }

  const chars = [...guaranteed];
  const targetLen = Math.max(opts.length, guaranteed.length);
  for (let i = chars.length; i < targetLen; i++) {
    chars.push(available[getRandomInt(available.length)]);
  }

  // Fisher-Yates shuffle
  for (let i = chars.length - 1; i > 0; i--) {
    const j = getRandomInt(i + 1);
    [chars[i], chars[j]] = [chars[j], chars[i]];
  }

  return chars.join("");
}
