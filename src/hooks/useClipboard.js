import { useState, useCallback } from 'react';

/**
 * Custom hook to handle clipboard write operations with timed feedback.
 * @param {number} timeout Duration in ms to display copied state (defaults to 2000ms).
 */
export function useClipboard(timeout = 2000) {
  const [hasCopied, setHasCopied] = useState(false);

  const copy = useCallback((text) => {
    if (!navigator?.clipboard) {
      console.warn('Clipboard API is not available on this environment');
      return;
    }

    navigator.clipboard.writeText(text)
      .then(() => {
        setHasCopied(true);
        setTimeout(() => setHasCopied(false), timeout);
      })
      .catch((err) => {
        console.error('Failed to copy to clipboard:', err);
      });
  }, [timeout]);

  return { hasCopied, copy };
}

export default useClipboard;
