import LinkedList from '../linked-list'

import toList from './to-list'

describe(toList, () => {
  it('converts an array or record to a list', () => {
    const arr = [1, 2, 3]
    const res = toList(arr)
    expect(res).toEqual(LinkedList.from(arr))

    const rec = {
      a: 10,
      b: 100,
      c: 1000
    }
    const res2 = toList(rec)
    expect(res2).toEqual(LinkedList.from([10, 100, 1000]))
  })

  it('returns a new list if provided with one', () => {
    const list = LinkedList.from([1, 2, 3])
    const res = toList(list)
    expect(res === list).toBe(false)
    expect(res).toEqual(list)
  })
})