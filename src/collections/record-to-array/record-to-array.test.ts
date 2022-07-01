import recordToArray from './record-to-array'

describe('recordToArray', () => {
  it('should return a sorted list by id', () => {
    const rec = {
      'b': 1,
      'a': 2
    }

    const res = recordToArray(rec)

    expect(res).toEqual<number[]>([2, 1])
  })
})