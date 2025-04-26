'use client';

import { useEffect } from 'react';

export default function MyComponent({ title }) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div>
      {/* ... content ... */}
    </div>
  );
}