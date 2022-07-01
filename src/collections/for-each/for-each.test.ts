import forEach from './for-each'

describe('forEach', () => {
  it('accepts and IterFn and returns a function that accepts a collection', () => {
    const result = forEach((x: number) => '')
    expect(typeof result).toBe('function')
  })
})