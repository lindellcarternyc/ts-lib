import { isArray } from '@/types/collection'

import forEach from '../for-each'
import LinkedList from '../linked-list'

const toArray = <T>(collection: Record<string, T> | LinkedList<T> | T[]): T[] => {
  if (isArray(collection)) return [...collection]
  
  const res: T[] = []

  forEach((item: T) => res.push(item))(collection)

  return res
}

export default toArray