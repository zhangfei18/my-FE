class ZfPlugin{
  constructor(){}
  apply(compiler){
    compiler.hooks.emit.tapAsync('ZfPlugin', (compilatin) => {
      debugger
      console.log(compilatin)
    })
  }

}

module.exports = ZfPlugin