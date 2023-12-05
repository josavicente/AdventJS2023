function decode(message) {
  const regex = /\(([^()]+)\)/
  let match = message.match(regex)
  while (match) {
    const reversed = match[1].split('').reverse().join('')
    message = message.replace(match[0], reversed)
    match = message.match(regex)
  }
  return message
}

// This JavaScript function, decode, is designed to decode a message
// by reversing substrings that are enclosed in parentheses.

// The function begins by defining a regular expression regex that
// matches any substring enclosed in parentheses. The regular
// expression /\(([^()]+)\)/ works by looking for an opening
//  parenthesis \(, followed by one or more characters that
//   are not parentheses [^()]+, and then a closing parenthesis \).

// Next, the function uses the match method to find the first
// substring in the message that matches the regex. The match
// method returns an array where the first element is the entire
// match, and the subsequent elements are the captured groups.
// In this case, match[0] would be the entire matched substring
// including the parentheses, and match[1] would be the substring
// inside the parentheses.

// The function then enters a while loop that continues as long
// as there is a match. Inside the loop, it first reverses the
// matched substring inside the parentheses. This is done by
// splitting the string into an array of characters with split(''),
// reversing the array with reverse(), and then joining the array
// back into a string with join('').

// After reversing the substring, the function replaces the first
// occurrence of the matched substring (including the parentheses)
// in the message with the reversed substring. This is done using
// the replace method.

// The function then looks for the next match in the updated
// message and repeats the process. Once there are no more
// matches (i.e., there are no more substrings enclosed in parentheses), the loop ends.

// Finally, the function returns the decoded message.
