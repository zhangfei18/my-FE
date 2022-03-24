const fs = require('fs')
const parser = require('@babel/parser')
const path = require('path')
const traverse = require('@babel/traverse').default
const babel = require('@babel/core')
function moduleAnalysis(filename) {
  const content = fs.readFileSync(filename, 'utf-8')
  // console.log(content)
  const ast = parser.parse(content, {
    sourceType: "module"
  })
  // console.log(ast.program.body)
  let dependencies = {}
  traverse(ast, {
    ImportDeclaration({ node }) {
      // console.log(node)
      // dependencies.push(node)
      let dirname = path.dirname(filename)
      dependencies[node.source.value] = './' + path.join(dirname, node.source.value)
    }
  })
  // console.log(dependencies)
  const { code } = babel.transformFromAst(ast, null, {
    presets: ['@babel/preset-env']
  })
  return {
    filename: filename,
    code: code,
    dependencies,
  }
}
// console.log(moduleAnalysis('./src/index.js'))

function graphAnalysis(entry) {
  const moduleInfo = moduleAnalysis(entry)
  let stack = [moduleInfo]
  for (let index = 0; index < stack.length; index++) {
    let { dependencies } = stack[index]
    for (let d in dependencies) {
      stack.push(moduleAnalysis(dependencies[d]))
    }
  }
  // console.log(stack)
  let graph = {}
  stack.forEach(module => {
    graph[module.filename] = {
      code: module.code,
      dependencies: module.dependencies
    }
  })
  return graph
}
// console.log(graphAnalysis('./src/index.js'))
function generateCode(entry) {
  const graph = JSON.stringify(graphAnalysis(entry))
  let code = `
  (function(graph){
    function require(module){
      let exports = {}
      function localRequrie(relativePath){
        return require(graph[module].dependencies[relativePath])
      }
      (function(code, require, exports){
        eval(code)
      })(graph[module].code, localRequrie, exports)
      return exports
    }
    require('${entry}')
  })(${graph})
  `
  return code
}
console.log(generateCode('./src/index.js'))