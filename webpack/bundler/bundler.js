const fs = require('fs')
const parser = require('@babel/parser')
const path = require('path')
const traverse = require('@babel/traverse').default
const babel = require('@babel/core')
const moduleAnalyser = (filename) => {
  const content = fs.readFileSync(filename, 'utf-8')
  const ast = parser.parse(content, {
    sourceType: 'module'
  })
  const dependencies = {}
  traverse(ast, {
    ImportDeclaration({ node }) {
      let dirnane = path.dirname(filename)
      dependencies[node.source.value] = './' + path.join(dirnane, node.source.value)
    }
  })
  let { code } = babel.transformFromAst(ast, null, {
    presets: ["@babel/preset-env"]
  })
  return {
    filename,
    dependencies,
    code
  }

}
//  console.log(moduleAnalyser('./src/index.js'))
function makeDependenciesGraph(entry) {
  const moduleInfo = moduleAnalyser(entry)
  // console.log(moduleInfo)
  let stack = [moduleInfo]
  for (let i = 0; i < stack.length; i++) {
    const { dependencies } = stack[i]
    for (let dependency in dependencies) {
      // console.log(dependencies[dependency])
      stack.push(moduleAnalyser(dependencies[dependency]))
    }
  }
  // console.log(stack)
  let grapth = {}
  stack.forEach(m => {
    grapth[m.filename] = {
      code: m.code,
      dependencies: m.dependencies
    }
  })
  return grapth
}
function generateCode(entry) {
  const dependenciesGraph = makeDependenciesGraph(entry)
  // console.log(dependenciesGraph)
  const graph = JSON.stringify(dependenciesGraph)
  return `
    (function(graph){
      function require(module){
        let exports = {}
        function localRequire(relaticePath){
          return require(graph[module].dependencies[relaticePath])
        }
        (function(require, exports, code){
          eval(code)
        })(localRequire, exports, graph[module].code)
        return exports
      }
      require('${entry}')
    })(${graph})
  `
}
const code = generateCode('./src/index.js')
console.log(code)