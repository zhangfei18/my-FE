const vnode = {
  tag: 'DIV',
  attrs: {
    id: 'app'
  },
  children: [
    {
      tag: 'SPAN',
      children: [{
        tag: 'A',
        children: []
      }]
    },
    {
      tag: 'SPAN',
      children: [
        {
          tag: 'A',
          children: []
        },
        {
          tag: 'A',
          children: []
        }
      ]
    }
  ]
}

function render(vnode) {
  if (typeof vnode === 'number') {
    vnode = String(vnode)
  }
  if (typeof vnode === 'string') {
    return document.createTextNode(vnode)
  }
  let element = document.createElement(vnode.tag)
  if (vnode.attrs) {
    Object.keys(vnode.attrs).forEach(attr => {
      element.setAttribute(attr, vnode.attrs[attr])
    })
  }
  if (vnode.children.length) {
    vnode.children.forEach(child => {
      element.appendChild(render(child))
    })
  }
  return element
}
console.log(render(vnode))