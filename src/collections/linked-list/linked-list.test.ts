import { isNull } from '../../types/maybe'
import LinkedList from './linked-list'
import LListNode from './linked-list-node'

describe(LinkedList, () => {
  describe('constructor', () => {
    it('creates an emtpy list', () => {
      const list = new LinkedList()
      expect(list.head).toBeNull()
    })
  })

  describe('#head', () => {
    it('sets the head of the list', () => {
      const list = new LinkedList<number>()
      expect(list.head).toBeNull()
      
      list.head = new LListNode(2)
      expect(list.head).not.toBeNull()
      expect(list.head.value).toBe(2)
      expect(list.head.next).toBeNull()

      list.head = null
      expect(list.head).toBeNull()
    })
  })

  describe('#of', () => {
    it('creates an empty list', () => {
      const list = LinkedList.of()
      expect(list.head).toBeNull()
    })

    it('creates a list with one element', () => {
      const list = LinkedList.of(1)
      expect(list.head).toMatchObject({
        value: 1,
        next: null
      })
    })

    it('creates a list with multiple elements', () => {
      const list = LinkedList.of(1, 2, 3)
      
      expect(list.head).not.toBeNull()
      expect(list.head!.value).toBe(1)

      expect(list.head!.next).not.toBeNull()
      expect(list.head!.next!.value).toBe(2)

      expect(list.head!.next!.next).not.toBeNull()
      expect(list.head!.next!.next!.value).toBe(3)
      expect(list.head!.next!.next!.next).toBeNull()
    })
  })

  describe('#from', () => {
    it('creates an empty list', () => {
      const list = LinkedList.from([])
      expect(isNull(list.head)).toBe(true)
    })
  })

  describe('#append', () => {
    it('adds an item to an empty list', () => {
      const list = new LinkedList<number>()
      expect(list.head).toBeNull()

      list.append(1)
      expect(list.head).toMatchObject({
        value: 1,
        next: null
      })
    })
  })

  it('adds a value to a list with one element', () => {
    const list = LinkedList.from(['a'])
    list.append('b')
    
    expect(list.head).toMatchObject({
      value: 'a',
      next: {
        value: 'b',
        next: null
      }
    })
  })

  it('adds a value to a list with multiple values', () => {
    const list = LinkedList.of(1, 2, 3)
    list.append(4)

    expect(list.head).toMatchObject({
      value: 1,
      next: {
        value: 2,
        next: {
          value: 3,
          next: {
            value: 4,
            next: null
          }
        }
      }
    })
  })
})