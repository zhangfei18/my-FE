// import "@babel/polyfill"
const p1 = new Promise(() => { })
const p2 = new Promise(() => { })

[p1, p2].map(item => { console.log(item) })