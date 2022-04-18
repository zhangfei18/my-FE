function resolveNumber(num) {
  return ('' + num).replace(/(\d)(?=(\d{3})+$)/g, '$1,')
}
console.log(resolveNumber(123456789))