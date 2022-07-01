import { isNull } from '../../types/maybe'
import LListNode, { MaybeNode } from './linked-list-node'

class LinkedList<T> {
  static of<T>(...values: T[]): LinkedList<T> {
    const list = new LinkedList<T>()

    if (values.length === 1) {
      list.head = new LListNode(values[0])
    } else if (values.length > 1) {
      const head = new LListNode(values[0])
      list.head = head

      let next = new LListNode(values[1])
      list.head.next = next

      values.slice(2).forEach(value => {
        const afterNext = new LListNode(value)
        next.next = afterNext
        next = afterNext
      })
    }
    
    return list
  }

  static from<T>(arr: T[]): LinkedList<T> {
    return LinkedList.of(...arr)
  }

  private _head: MaybeNode<T> = null

  get head(): MaybeNode<T> {
    return this._head
  }

  set head(head: MaybeNode<T>) {
    this._head = head
  }

  append(value: T): this {
    if (isNull(this.head)) {
      this.head = new LListNode(value)
      return this
    }

    let next = this.head!
    while (next.next) {
      next = next.next
    }

    next.next = new LListNode(value)

    return this
  }
}

export default LinkedList