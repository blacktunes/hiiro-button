/**
 * 获取随机数
 */
const getrRandomInt = (max: number): number => {
  return Math.floor(Math.random() * Math.floor(max))
}

export {
  getrRandomInt
}
