function findNaughtyStep(original, modified) {
  const limit = Math.max(original.length, modified.length)
  for (let i = 0; i < limit; i++) {
    if (original[i] !== modified[i]) {
      return original.length > modified.length ? original[i] : modified[i]
    }
  }
  return ''
}

// This JavaScript function, findNaughtyStep, is designed to compare two input arrays,
// original and modified, and find the first element where they differ.

// The function begins by defining a limit variable, which is set to the
// length of the longer of the two arrays. This is done using the Math.max function.
// This limit is used to control the loop that follows, ensuring that the
// function checks every element in both arrays, up to the length of the
// longer one.

// The function then enters a for loop, which iterates from 0 to one
// less than the limit. Inside this loop, it checks if the ith element
// of original is not equal to the ith element of modified. If it finds
// a difference, it returns the differing element from the longer array.
// This is determined by the ternary
// operator original.length > modified.length ? original[i] : modified[i].

// If the function iterates through all elements up
// to limit without finding a difference, it returns an
// empty string. This would indicate that the two arrays
//  are either identical up to the length of the shorter
//  one, or they are both empty.
