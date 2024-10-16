const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const printPrimes = () => {
  for (let i = 1; i <= 20; i++) {
    console.log(`${i} is prime: ${isPrime(i)}`);
  }
};

printPrimes();
