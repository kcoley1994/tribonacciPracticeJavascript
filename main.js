const arr1 = [1, 1, 1]
const arr2 = [1, 3, 7]
const arr3 = [1, 2, 3]
console.log('This is Tribonacci')
const tribonacciSequence = (arr, n) => {
    let seq = [...arr]
  for (i = 0; i < n - arr.length ; i++){
    seq.push(seq[seq.length - 1] + seq[seq.length - 2] + seq[seq.length - 3]) 
  }
  console.log(seq.slice(0,n))
  return seq.slice(0,n)
};

tribonacciSequence(arr1, n=10)
tribonacciSequence(arr2, n=10)
tribonacciSequence(arr3, n=10)

console.log('This is Fibonacci')

const fibonacciSequence = (arr, n) => {
    let seq = [...arr]
  for (i = 0; i < n - arr.length ; i++){
    seq.push(seq[seq.length - 1] + seq[seq.length - 2] ) 
  }
  console.log(seq.slice(0,n))
  return seq.slice(0,n)
};

fibonacciSequence(arr1, n=10)
fibonacciSequence(arr2, n=10)
fibonacciSequence(arr3, n=10)