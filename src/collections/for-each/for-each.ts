import { isNull } from '@/types/maybe'
import { SequenceIter, Collection, Iter, RecordIter } from '@/types/collection'

import LinkedList from '../linked-list'
import { MaybeNode } from '../linked-list/linked-list-node'

const handleArrayForEach = <T>(fn: SequenceIter<T>, arr: T[], curIndex: number = 0): void => {
  if (curIndex >= arr.length) return
  fn(arr[curIndex], curIndex, arr)
  return handleArrayForEach(fn, arr, curIndex + 1)
}

const handleRecordForEach = <T>(fn: RecordIter<T>, record: Record<string, T>, keys: string[], curIndex: number = 0): void => {
  if (curIndex >= keys.length) return

  const key = keys[curIndex]
  const item = record[key]
  fn(item, key, record)
  return handleRecordForEach(fn, record, keys, curIndex + 1)
}

const handleLinkedListForEach = <T>(fn: SequenceIter<T>, list: LinkedList<T>, node: MaybeNode<T>, curIndex: number = 0): void => {
  if (isNull(node)) return

  fn(node.value, curIndex, list)

  return handleLinkedListForEach(fn, list, node.next, curIndex + 1)
}

const forEach = <T>(iter: Iter<T>) => {
  return (collection: Collection<T>) => {
    if (Array.isArray(collection)) return handleArrayForEach(iter as SequenceIter<T>, collection)
    if (collection instanceof LinkedList<any>) return handleLinkedListForEach(iter as SequenceIter<T>, collection, collection.head)
    return handleRecordForEach(iter as RecordIter<T>, collection, Object.keys(collection).sort())
  }
}

export default forEach