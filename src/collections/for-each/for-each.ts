import { ArrayIter, Collection, Iter, RecordIter } from '../collection-types'

const handleArrayForEach = <T>(fn: ArrayIter<T>, arr: T[], curIndex: number = 0): void => {
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

const forEach = <T>(iter: Iter<T>) => {
  return (collection: Collection<T>) => {
    if (Array.isArray(collection)) return handleArrayForEach(iter as ArrayIter<T>, collection)
    return handleRecordForEach(iter as RecordIter<T>, collection, Object.keys(collection).sort())
  }
}

export default forEach