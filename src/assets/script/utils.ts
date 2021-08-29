import { CategoryItem } from './type'
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
export const getCategory = (name: string) => CategoryList.find(item => item.name === name)
