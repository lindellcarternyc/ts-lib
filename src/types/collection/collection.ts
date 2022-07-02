import LinkedList from '@/collections/linked-list'

export type Sequence<T> =
  | T[]
  | LinkedList<T>

export type Collection<T> = 
  | Sequence<T>
  | Record<string, T>

export type Index =
  | number
  | string

type Constrain<T, U> = U extends T 
  ? U
  : never

export type SequenceIter<T, U = void> = (item: T, index: Constrain<Index, number>, collection: Constrain<Collection<T>, Sequence<T>>) => U
export type RecordIter<T, U = void> = (item: T, index: Constrain<Index, string>, collection: Constrain<Collection<T>, Record<string, T>>) => U
export type Iter<T, U = void> = 
  | SequenceIter<T, U>
  | RecordIter<T, U>

export type SequenceMapper<T, U> = SequenceIter<T, U>
export type RecordMapper<T, U> = RecordIter<T, U>
export type Mapper<T, U> =
  | SequenceMapper<T, U>
  | RecordMapper<T, U>
