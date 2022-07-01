import forEach from '../for-each'

const arrayToRecord = <T>(arr: T[]): Record<string, T> => {
  const result: Record<string, T> = {}

  forEach((item: T, index: number) => {
    const key = index.toString()
    result[key] = item
  })(arr)

  return result
}

export default arrayToRecord