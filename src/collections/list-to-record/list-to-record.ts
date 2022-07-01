import forEach from '../for-each'
import LinkedList from '../linked-list'

const listToRecord = <T>(list: LinkedList<T>): Record<string, T> => {
  const res: Record<string, T> = { }

  forEach((item: T, index: number) => {
    const key = index.toString()
    res[key] = item
  })(list)

  return res
}

export default listToRecord