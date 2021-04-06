import { CategoryList } from './voices'

/**
 * 获取随机数
 */
export const getRandomInt = (max: number): number => {
  return Math.floor(Math.random() * Math.floor(max))
}

/**
 * 获取指定的分类
 */
export const getCategory = (name: string) => {
  return CategoryList.find(item => {
    if (item.name === name) {
      return item
    }
  })
}
