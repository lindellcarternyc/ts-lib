import arrayToRecord from './array-to-record'

describe(arrayToRecord, () => {
  it('converts a T[] to a Record<string, T>', () => {
    const arr = [1, 2, 3]
    const res = arrayToRecord(arr)
    expect(res).toEqual<Record<string, number>>({
      '0': 1,
      '1': 2,
      '2': 3
    })
  })
})