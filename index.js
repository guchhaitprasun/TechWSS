/**
 * Write a function to merge two sorted arrays into one sorted array.
 * This involves combining two pre-sorted arrays while maintaining sorted order.
 * Example: [1, 3, 5] and [2, 4, 6] → [1, 2, 3, 4, 5, 6].
 */

function MergeTwoSortedArray(arr1, arr2) {
  let mergedArray = [];
  let i = 0,
    j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }

  console.log(mergedArray)
}

/**
 * Write a function to reverse the digits of a number.
 * Reversing the digits of a number means flipping the order of its digits.
 * Example: 123 → 321, 456 → 654.
 */

// Approach 1
// Idea is to read the humber as string and then split the number and rever it

function ReverseNumberStringApproach(input) {
  // Data sanitization
  const isNegative = +input < 0;
  const absInput = Math.abs(+input);

  // Core functionality
  const reverseNumber = parseInt(
    absInput.toString().split("").reverse().join(""),
    10
  );

  // Results
  const result = isNegative ? -reverseNumber : reverseNumber;
  console.log(result);
}

// Approach 2
// Divide the result by 10, since we assume the number is a base 10 number i.e. decimal

function ReverseNumberDivideApproach(input) {
  // Data sanitization
  const isNegative = +input < 0;
  let absInput = Math.abs(+input);

  // Core functionality
  let output = 0;
  while (Math.trunc(absInput / 10) > 0) {
    let firsDigit = absInput % 10;
    output = output * 10 + firsDigit;
    absInput = Math.trunc(absInput / 10);
  }
  output = output * 10 + absInput;

  // Results
  const result = isNegative ? -output : output;
  console.log(result);
}

ReverseNumberStringApproach(3453);
ReverseNumberDivideApproach(3465);
MergeTwoSortedArray([1, 3, 5],[2, 4, 6])