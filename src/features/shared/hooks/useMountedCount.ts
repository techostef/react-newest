import { useCallback, useEffect, useRef } from 'react'

export function useMountedCount() {
  const isMounted = useRef(0)

  useEffect(() => {
    isMounted.current += 1
  }, [])

  return useCallback(() => isMounted.current, [])
}