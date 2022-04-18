var menu_list = [{
  id: '1',
  menu_name: '设置',
  menu_url: 'setting',
  parent_id: 0
}, {
  id: '1-1',
  menu_name: '权限设置',
  menu_url: 'setting.permission',
  parent_id: '1'
}, {
  id: '1-1-1',
  menu_name: '用户管理列表',
  menu_url: 'setting.permission.user_list',
  parent_id: '1-1'
}, {
  id: '1-1-2',
  menu_name: '用户管理新增',
  menu_url: 'setting.permission.user_add',
  parent_id: '1-1'
}, {
  id: '1-1-3',
  menu_name: '角色管理列表',
  menu_url: 'setting.permission.role_list',
  parent_id: '1-1'
}, {
  id: '1-2',
  menu_name: '菜单设置',
  menu_url: 'setting.menu',
  parent_id: '1'
}, {
  id: '1-2-1',
  menu_name: '菜单列表',
  menu_url: 'setting.menu.menu_list',
  parent_id: '1-2'
}, {
  id: '1-2-2',
  menu_name: '菜单添加',
  menu_url: 'setting.menu.menu_add',
  parent_id: '1-2'
}, {
  id: '2',
  menu_name: '订单',
  menu_url: 'order',
  parent_id: 0
}, {
  id: '2-1',
  menu_name: '报单审核',
  menu_url: 'order.orderreview',
  parent_id: '2'
}, {
  id: '2-2',
  menu_name: '退款管理',
  menu_url: 'order.refundmanagement',
  parent_id: '2'
}
]

// function transform(arr) {
//   let bufferMap = new Map()
//   for (let key of arr) {
//     if (bufferMap.has(key.parent_id)) {
//       bufferMap.get(key.parent_id).push(key)
//     } else {
//       bufferMap.set(key.parent_id, [key])
//     }
//   }

// }


function transform(list) {
  let root = {}
  function dfs(root, id, insertcChild) {
    if (!root) return
    if (root.id === id) {
      Array.isArray(root.children) ? root.children.push(insertcChild) : root.children = [insertcChild]
    }
    root.children && root.children.forEach(child => { dfs(child, id, insertcChild) })
  }
  for (let i = 0; i < list.length; i++) {
    let current = list[i]
    if (!current.parent_id) {
      root.children = (root.children || []).concat(current)
    } else {
      dfs(root, current.parent_id, current)
    }
  }
  return root
}
 console.log(transform(menu_list))