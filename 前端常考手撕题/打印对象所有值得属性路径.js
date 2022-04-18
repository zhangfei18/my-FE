let obj = {
  a: { b: 3 },
  c: { d: { e: 5 } },
  1: 0
}

function key2path(obj) {
  let paths = []
  function walk(path, obj) {
    Object.keys(obj).forEach((key) => {
      if (typeof obj[key] === 'object') {
        walk(path + key + '->', obj[key])
      } else {
        paths.push(path + key)
      }
    })
  }
  walk('', obj)
  return paths
}

console.log(key2path(obj))