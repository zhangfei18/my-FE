/**
 * 发布订阅模式
 * 存储watcher
 * 派发更新
 * 在哪里实例化
 * 在哪里收集sub也就是watcher
 * 在哪里触发notify
*/
export default class Dep{
  constructor() {
    this.subs = []
  }
  addSub(sub){
    if(sub && sub.update){
      this.subs.push(sub)
    }
  }
  notify(){
    this.subs.forEach(sub => {
      sub.update()
    })
  }
}