import { Collection, Mapper, RecordMapper, SequenceMapper } from '@/types/collection'

import forEach from '../for-each/for-each'

import LinkedList from '../linked-list'
import LListNode, { MaybeNode } from '../linked-list/linked-list-node'


const handleArrayMap = <T, U>(mapper: SequenceMapper<T, U>, arr: T[]): U[] => {
  const result: U[] = []

  forEach((item: T, index: number) => {
    result.push(mapper(item, index, arr))
  })(arr)

  return result
}

const handleRecordMap = <T, U>(mapper: RecordMapper<T, U>, record: Record<string, T>): Record<string, U> => {
  const res: Record<string, U> = { }

  forEach((item: T, index: string) => {
    res[index] = mapper(item, index, record)
  })(record)

  return res
}

const handleLinkedListMap = <T, U>(mapper: SequenceMapper<T, U>, list: LinkedList<T>): LinkedList<U> => {
  const res = new LinkedList<U>()

  let head: MaybeNode<U> = null
  let next: MaybeNode<U> = null

  forEach((item: T, index: number) => {
    const value = mapper(item, index, list)

    if (index === 0) {
      head = new LListNode(value)
    } else if (index === 1) {
      next = new LListNode(value)
      head!.next = next
    } else {
      const afterNext = new LListNode(value)
      next!.next = afterNext
      next = afterNext
    }
  })(list)

  res.head = head
  return res
}

const map = <T, U>(mapFn: Mapper<T, U>) => {
  return (collection: Collection<T>): Collection<U> => {
    if (Array.isArray(collection)) return handleArrayMap(mapFn as SequenceMapper<T, U>, collection)
    if (collection instanceof LinkedList<any>) return handleLinkedListMap(mapFn as SequenceMapper<T, U>, collection)
    return handleRecordMap(mapFn as RecordMapper<T, U>, collection)
  }
}

export default map