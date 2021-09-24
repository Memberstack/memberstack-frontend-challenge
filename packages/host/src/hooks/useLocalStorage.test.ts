import { renderHook, act } from '@testing-library/react-hooks';
import { INITIAL_COLOR } from '../constants';
import { useLocalStorage}  from './useLocalStorage'

describe('useLocalStorage', () => {
  it('return initial color', () => {
    const { result } = renderHook(() => useLocalStorage(INITIAL_COLOR, 'color'))
    expect(result.current.item).toBe(INITIAL_COLOR)
  });

  it('return correct color after setItem is called', () => {
    const { result } = renderHook(() => useLocalStorage(INITIAL_COLOR, 'color'))
    act(() => {
      result.current.setItem('#292d3e')
    })
    expect(result.current.item).toBe('#292d3e')
  })
})