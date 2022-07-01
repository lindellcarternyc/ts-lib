import { ArrayIter, ArrayMapper, Collection, Index, Mapper, RecordMapper } from '../collection-types'
import forEach from '../for-each/for-each'


const handleArrayMap = <T, U>(mapper: ArrayMapper<T, U>, arr: T[]): U[] => {
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

const map = <T, U>(mapFn: Mapper<T, U>) => {
  return (collection: Collection<T>): Collection<U> => {
    if (Array.isArray(collection)) return handleArrayMap(mapFn as ArrayMapper<T, U>, collection)
    return handleRecordMap(mapFn as RecordMapper<T, U>, collection)
  }
}

export default map