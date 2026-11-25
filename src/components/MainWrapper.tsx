'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

export function MainWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isTitansCup = pathname?.startsWith('/aic-titans-cup');

  return (
    <main className={`flex-grow overflow-x-hidden ${isTitansCup ? 'pt-0 bg-[#101D32]' : 'pt-16'}`}>
      {children}
    </main>
  );
}
