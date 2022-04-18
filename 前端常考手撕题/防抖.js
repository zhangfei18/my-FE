function debounce(fn, interval) {
  let flag
  return function (...args) {
    if (flag) {
      clearTimeout(flag)
    }
    flag = setTimeout(() => {
      fn.apply(this, args)
    }, interval)
  }
}