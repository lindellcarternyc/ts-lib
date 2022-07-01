import LListNode from './linked-list-node'

describe(LListNode, () => {
  describe('constructor', () => {
    it(`creates a new node with an empty 'next'`, () => {
      const node = new LListNode(1)
      expect(node).toMatchObject({
        value: 1,
        next: null
      })
    })
  })

  describe('#next', () => {
    it('sets the next node', () => {
      const node = new LListNode('a')
      expect(node.next).toBeNull()

      node.next = new LListNode('b')
      expect(node.next).not.toBeNull()
      expect(node.next.next).toBeNull()

      node.next = null
      expect(node.next).toBeNull()
    })
  })
})