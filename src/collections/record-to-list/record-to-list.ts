import forEach from '../for-each'
import LinkedList from '../linked-list'

const recordToList = <T>(record: Record<string, T>): LinkedList<T> => {
  const list = new LinkedList<T>()

  forEach<T>((item: T) => {
    list.append(item)
  })(record)
  
  return list
}

export default recordToList