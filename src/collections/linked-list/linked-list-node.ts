import { Maybe } from '../../types'

export type MaybeNode<T> = Maybe<LListNode<T>>

class LListNode<T> {
  private _next: MaybeNode<T> = null

  constructor(readonly value: T) { }

  get next(): MaybeNode<T> {
    return this._next
  }

  set next(next: MaybeNode<T>) {
    this._next = next
  }
}

export default LListNode