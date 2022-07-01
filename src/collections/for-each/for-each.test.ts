import LinkedList from '../linked-list/linked-list'
import forEach from './for-each'

describe('forEach', () => {
  it('accepts and IterFn and returns a function that accepts a collection', () => {
    const result = forEach((x: number) => '')
    expect(typeof result).toBe('function')
  })

  it('calls a func for each item in an array', () => {
    const arr = [1, 2, 3]
    const fn = jest.fn()

    forEach(fn)(arr)

    expect(fn.mock.calls).toHaveLength(3)
    expect(fn.mock.calls).toEqual<[number, number, number[]][]>([
      [1, 0, [1, 2, 3]],
      [2, 1, [1, 2, 3]],
      [3, 2, [1, 2, 3]]
    ])
  })

  it('calls a func for each item in a record', () => {
    const names = {
      'a': 1,
      'b': 2
    }
    const fn = jest.fn()

    forEach(fn)(names)

    expect(fn.mock.calls).toEqual<[number, string, Record<string, number>][]>([
      [1, 'a', names],
      [2, 'b', names]
    ])
  })

  it('calls a func for each item in a linked list', () => {
    const list = LinkedList.of('a', 'b', 'c')
    const fn = jest.fn()
    forEach<string>(fn)(list)
    expect(fn.mock.calls).toEqual<[string, number, LinkedList<string>][]>([
      ['a', 0, list],
      ['b', 1, list],
      ['c', 2, list]
    ])
  })
})