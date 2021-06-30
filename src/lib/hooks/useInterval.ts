import { useEffect, useRef } from 'react';

function useInterval(callback: Function, delay: number | null) {
  const savedCallback = useRef<Function>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay != null && savedCallback.current != null) {
      const id = setInterval(() => savedCallback.current!(), delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default useInterval;
