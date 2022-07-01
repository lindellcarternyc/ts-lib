import LinkedList from '../linked-list'

import listToRecord from './list-to-record'

describe(listToRecord, () => {
  it('converts an empty list to an empty object', () => {
    const list = new LinkedList()
    const res = listToRecord(list)
    expect(res).toEqual({})
  })

  it('converts a non-empty list', () => {
    const list = LinkedList.from(['a', 'b', 'c'])
    const res = listToRecord(list)
    expect(res).toEqual({
      '0': 'a',
      '1': 'b',
      '2': 'c'
    })
  })
})