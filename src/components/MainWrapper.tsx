'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

export function MainWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isTitansCup = pathname?.startsWith('/aic-titans-cup');

  return (
    <main
      className={`flex-grow w-full max-w-full min-w-0 overflow-x-clip ${isTitansCup ? 'pt-0 bg-[#101D32]' : 'pt-[76px]'
        }`}
    >
      {children}
    </main>
  );
}
