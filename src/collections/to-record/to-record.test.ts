import LinkedList from '../linked-list'
import toRecord from './to-record'

describe(toRecord, () => {
  it('converts an array or linked list to a record', () => {
    const arr = [1, 2, 3]
    const res = toRecord(arr)
    expect(res).toEqual({
      '0': 1,
      '1': 2,
      '2': 3
    })
  })

  it('converts a linked list to a record', () => {
    const list = LinkedList.of({ a: 1 }, { b: 2 }, { c: 3 })
    const res = toRecord(list)
    expect(res).toEqual({
      '0': { a: 1 },
      '1': { b: 2 },
      '2': { c: 3 }
    })
  })

  it('returns a new record based on the provided record', () => {
    const rec = {
      hello: 'world',
      salut: 'monde'
    }

    const res = toRecord(rec)

    expect(res).not.toBe(rec)
    expect(res).toEqual(rec)
  })
})