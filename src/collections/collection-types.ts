export type Collection<T> = 
  | T[]
  | Record<string, T>

export type Index =
  | number
  | string

type Constrain<T, U> = U extends T 
  ? U
  : never

export type ArrayIter<T, U = void> = (item: T, index: Constrain<Index, number>, collection: Constrain<Collection<T>, T[]>) => U
export type RecordIter<T, U = void> = (item: T, index: Constrain<Index, string>, collection: Constrain<Collection<T>, Record<string, T>>) => U
export type Iter<T, U = void> = 
  | ArrayIter<T, U>
  | RecordIter<T, U>

export type ArrayMapper<T, U> = ArrayIter<T, U> // (item: T, index: Constrain<Index, number>, collection: T[]) => U
export type RecordMapper<T, U> = RecordIter<T, U> // (item: T, index: Constrain<Index, string>, collection: Record<string, T>) => U
export type Mapper<T, U> =
  | ArrayMapper<T, U>
  | RecordMapper<T, U>
