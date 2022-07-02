import LinkedList from '../linked-list'
import toArray from './to-array'

describe(toArray, () => {
  it('returns a new a array when provided one', () => {
    const arr = [1, 2, 3]
    const res = toArray(arr)
    expect(arr === res).toBe(false)
    expect(res).toEqual([1, 2, 3])
  })

  it('converts records to arrays', () => {
    const rec = { a: 1, b: 2 }
    const res = toArray(rec)
    expect(res).toEqual([1, 2])
  })

  it('converts linked-lists to arrays', () => {
    const list = LinkedList.of(1, 2, 3)
    const res = toArray(list)
  })
})