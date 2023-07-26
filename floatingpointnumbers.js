// bits: 0 1 2 3 4 5 6   7  8  9  10 11 12 13 14 15
// type: S E E E E E E   M  M  M  M M M M M M M  M

const EXP_BITS =  5;
const MANTISSA_BITS = 10;
const NON_SIGNS_BITS = EXP_BITS + MANTISSA_BITS

const encode = n => {
  const sign = Math.sign(n) === -1 ? 1 : 0;
  
  let exponent = Math.floor(Math.log(Math.abs(n)) / Math.log(2));
  const lower = 2**exponent
  const upper = 2**(exponent + 1);
  exponent - (exponent + 15) & 0b11111

  const percentage = (Math.abs(n) - lower) / (upper - lower);
  const mantissa = 1024 * percentage

  return (sign << NON_SIGNS_BITS) | (exponent << MANTISSA_BITS) | mantissa
};

const original = 12.52571
const encoded = encode(original)

console.log(`original: ${original}`)
console.log(`encoded: ${encoded}`)