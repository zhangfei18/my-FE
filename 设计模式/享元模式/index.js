// '鸭子'补丁
Function.prototype.implementsFor = function (parentClassOrObject) {
  if (parentClassOrObject.constructor === Function) {// 构造器
    this.prototype = Object.create(parentClassOrObject.prototype)
    this.prototype.constructor = this
    this.prototype.parent = parentClassOrObject.prototype
  } else {// 普通对象
    this.prototype = parentClassOrObject
    this.prototype.constructor = this
    this.prototype.parent = parentClassOrObject
  }
  return this
}

let CoffeeOrder = {
  serveCoffee: function (context) { },
  getFlavor: function () { }
}
function CoffeeFlavor(newFlavor) {
  let flavor = newFlavor
  console.log(this.getFlavor)
  if (typeof this.getFlavor === 'function') {
    this.getFlavor = function () {
      return flavor
    }
  }
  if (typeof this.serveCoffee === 'function') {
    this.serveCoffee = function (context) {
      console.log(`Serving Coffee flavor ${flavor} to the number ${context.getTable()}`)
    }
  }
}
CoffeeFlavor.implementsFor(CoffeeOrder)

function CoffeeOrderContext(tableNumber) {
  return {
    getTable() {
      return tableNumber
    }
  }
}

function CoffeeFlavorFactory() {
  let flavors = {}
  return {
    getCoffeeFlavor: function (flavorName) {
      let flavor = flavors[flavorName]
      if (flavor === undefined) {
        flavor = new CoffeeFlavor(flavorName)
        flavors[flavorName] = flavor
      }
      return flavor
    },
    getTotalCoffeeFlavorsMade() {
      return Object.keys(flavors).length
    }
  }
}

function testFlyweight() {
  let flavors = new CoffeeFlavor()
  let tables = new CoffeeOrderContext()
  let orderMade = 0
  let flavorFactory
  flavorFactory = new CoffeeFlavorFactory()
  function takeOrders(flavorIn, table) {
    flavors[orderMade] = flavorFactory.getCoffeeFlavor(flavorIn)
    tables[orderMade++] = new CoffeeOrderContext(table)
  }

  takeOrders("Cap", 1)
  takeOrders("Cap2", 2)
  takeOrders("Cap3", 3)
  takeOrders("Cap4", 4)
  takeOrders("Cap5", 5)
  takeOrders("Cap6", 6)
  takeOrders("Cap7", 7)
  takeOrders("Cap8", 8)
  for (let i = 0; i < orderMade; i++) {
    flavors[i].serveCoffee(tables[i])
  }
  console.log(" ")
  console.log("total CoffeeFlavor objects made:" + flavorFactory.getTotalCoffeeFlavorsMade())
}
testFlyweight()
/*
  上面的例子是《JavaScript设计模式》一书中的例子， 貌似太懂，难道就是为了证明
  下面实例化出来的这么多口味订单不用每个都声明serveCoffee 和 getFlavor方法了？
*/ 
