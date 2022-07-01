import LinkedList from '../linked-list'

import listToArray from './list-to-array'

describe(listToArray, () => {
  it('converts lists to arrays', () => {
    const arrays = [
      [],
      [1],
      [1, 2, 3]
    ]

    arrays.forEach(arr => {
      const list = LinkedList.from(arr)
      const res = listToArray(list)
      expect(res).toEqual(arr)
    })
  })
})