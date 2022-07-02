import LinkedList from '../linked-list'

import recordToList from './record-to-list'

describe(recordToList, () => {
  it('transforms an empty record', () => {
    expect(recordToList({})).toEqual(LinkedList.from([]))
  })

  it('transforms non-empty records', () => {
    const rec = {
      'z': 0,
      'y': 1,
      'x': 2
    }
    const res = recordToList(rec)
    expect(res).toEqual(LinkedList.from([2, 1, 0]))
  })
})