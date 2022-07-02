import { isLinkedList, isRecord } from '@/types/collection'

import forEach from '../for-each'
import LinkedList from '../linked-list'

const toList = <T>(collection: T[] | Record<string, T> | LinkedList<T>): LinkedList<T> => {
  if (isRecord(collection) || isLinkedList(collection)) {
    const list = new LinkedList<T>()

    forEach((item: T) => list.append(item))(collection)

    return list
  }

  return LinkedList.from(collection)
}

export default toList