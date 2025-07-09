import { describe, it, expect } from 'vitest'
import { sum, isEven } from '../math'

describe('math utils', () => {
  it('sum adds positive numbers', () => {
    expect(sum(2, 5)).toBe(7)
  })

  it('isEven detects even numbers', () => {
    expect(isEven(42)).toBe(true)
  })
})
