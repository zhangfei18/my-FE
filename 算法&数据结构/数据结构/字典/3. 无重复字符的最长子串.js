


function lengthOfLongestSubstring(s) {
  let bufferMap = new Map()
  let l = 0
  let maxLen = 0
  for (let r = 0; r < s.length; r++) {
    let currentStr = s[r]
    if (typeof bufferMap.has(currentStr) && bufferMap.get(currentStr) >= l) {
      l = bufferMap.get(currentStr) + 1
    }
    maxLen = Math.max(r - l + 1, maxLen)
    bufferMap.set(currentStr, r)
  }
  return maxLen
}
lengthOfLongestSubstring("abbcdea")