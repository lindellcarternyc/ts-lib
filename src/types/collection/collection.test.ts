import LinkedList from '../../collections/linked-list'

import { isArray, isLinkedList, isRecord } from './collection'

describe(isArray, () => {
  it('returns true if a collection is an array', () => {
    expect(isArray([])).toBe(true)
  })

  it('returns false otherwise', () => {
    expect(isArray({})).toBe(false)
    expect(isArray(new LinkedList())).toBe(false)
  })
})

describe(isLinkedList, () => {
  it('returns true if a collection is a linked list / false otherwise', () => {
    expect(isLinkedList(new LinkedList())).toBe(true)
    expect(isLinkedList({})).toBe(false)
    expect(isLinkedList([])).toBe(false)
  })
})

describe(isRecord, () => {
  it('returns true if the collection is a record / false otherwise', () => {
    expect(isRecord({})).toBe(true)
    expect(isRecord([])).toBe(false)
    expect(isRecord(new LinkedList())).toBe(false)
  })
})