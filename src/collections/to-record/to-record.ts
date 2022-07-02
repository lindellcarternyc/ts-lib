import forEach from '../for-each'
import LinkedList from '../linked-list'

const toRecord = <T>(collection: T[] | LinkedList<T> | Record<string, T>): Record<string, T> => {
  const res: Record<string, T> = {}

  forEach((item: T, index: string | number) => {
    const key = index.toString()
    res[key] = item
  })(collection)

  return res
}

export default toRecord