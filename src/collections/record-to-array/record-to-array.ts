import forEach from '../for-each'

const recordToArray = <T>(record: Record<string, T>): T[] => {
  const result: T[] = []

  forEach((item: T) => {
    result.push(item)
  })(record)

  return result
}

export default recordToArray