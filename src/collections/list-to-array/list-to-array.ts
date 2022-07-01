import forEach from '../for-each'
import LinkedList from '../linked-list'

const listToArray = <T>(list: LinkedList<T>): T[] => {
  const result: T[] = []

  forEach((item: T) => result.push(item))(list)

  return result
}

export default listToArray