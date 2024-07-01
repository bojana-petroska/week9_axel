// Introduction to Tribonacci Sequence
// The Tribonacci sequence is a variation of the Fibonacci sequence where each term is
// the sum of the three preceding ones. The sequence starts with T(0) = 0, T(1) = 1, and
// T(2) = 1, and the nth term is defined as: T(n)=T(n−1)+T(n−2)+T(n−3)T(n) = T(n-1) + T(n-2) +
// T(n-3)T(n)=T(n−1)+T(n−2)+T(n−3)
// Feel free to look at your previous Fibonacci code for inspiration.

// Task 1: Implement Recursive Tribonacci

const btn = document.getElementById('button');
const result = document.getElementById('output');

let count = 0;
const tribonacci = (n) => {
  if (n === 0) return 0;
  if (n === 1 || n === 2) return 1;
  count++;

  //console.log(`tribonacci of: ${n} with counts of ${count}`);
  return tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
};

let countMemo = 0;
const tribonacciMemo = (n, memo = {}) => {
  if (n === 0) return 0;
  if (n === 1 || n === 2) return 1;

  if (memo[n]) return memo[n];

  //console.log(`tribonacciMemo of: ${n} with counts of ${countMemo}`);
  countMemo++;
  memo[n] =
    tribonacciMemo(n - 1, memo) +
    tribonacciMemo(n - 2, memo) +
    tribonacciMemo(n - 3, memo);

  return memo[n];
};

let countTabu = 0;
const tribonacciTabu = (n) => {
  if (n === 0) return 0;
  if (n === 1 || n === 2) return 1;
  const triTabu = [0, 1, 1];

  for (let i = 3; i <= n; i++) {
    triTabu[i] = triTabu[i - 1] + triTabu[i - 2] + triTabu[i - 3];
    countTabu++;
    //console.log(`tribonacciTabu of: ${n} with counts of ${countTabu}`);
  }

  return triTabu[n];
};

btn.addEventListener('click', analyzeRecursiveTribonacci);

function analyzeRecursiveTribonacci() {
  let n = 10; // Using 35 to ensure we see the performance difference;
  console.log('Recursive Tribonacci:');
  const tribonacciTime = measureExecutionTime(tribonacci, n);
  console.log(`Execution Time: ${tribonacciTime} ms`);
  console.log('Memo Tribonacci:');
  const tribonacciMemoTime = measureExecutionTime(tribonacciMemo, n);
  console.log(`Execution Time: ${tribonacciMemoTime} ms`);
  const tribonacciTabuTime = measureExecutionTime(tribonacciTabu, n);
  console.log('Tabu Tribonacci:');
  console.log(`Execution Time: ${tribonacciTabuTime} ms`);

  result.innerText = tribonacci(10);
}

function measureExecutionTime(algorithm, input) {
  const start = performance.now();
  algorithm(input);
  const end = performance.now();
  return end - start;
}


