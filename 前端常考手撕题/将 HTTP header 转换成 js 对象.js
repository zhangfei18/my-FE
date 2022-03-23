let str = `Accept-Ranges: bytes 
Cache-Control: max-age=6000, public
Connection: keep-alive
Content-Type: application/javascript
Time: '2022-03-22T13:14:42.784Z'`

function transform(str) {
  let ret = {}
  let strs = str.split('\n')
  strs.forEach(s => {
    let [key, ...vals] = s.split(':')
    ret[key.trim()] = vals.join(':').trim()
  })
  console.log(ret)
}
transform(str)