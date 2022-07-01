export type Maybe<T> = T | null

export const isNull = <T>(maybe: Maybe<T>): maybe is null => {
  return maybe === null
}