const json = {
  a: { b: { c: 1 } },
  arr: [1, 2, 3]
}

function dfs(json, path){
  if(!json) return
  console.log(path, json)
  Object.keys(json).forEach( k => {
    dfs(json[k], path.concat(k))
  } )
}
dfs(json, [])