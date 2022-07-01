import LinkedList from '../linked-list'

import arrayToList from './array-to-list'

describe(arrayToList, () => {
  it('converts an array to a list', () => {
    expect(arrayToList([1, 2, 3])).toEqual(LinkedList.from([1, 2, 3]))
  })
})