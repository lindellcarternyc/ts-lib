import { isNull } from './maybe'

describe(isNull, () => {
  it('returns true if the `maybe` is null', () => {
    expect(isNull(null)).toBe(true)
    expect(isNull(3)).toBe(false)
  })
})