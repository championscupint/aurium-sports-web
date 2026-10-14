'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { EnquiryContext as ContextType, EnquiryKind } from '@/lib/enquiry';

interface ModalContextValue {
  isOpen: boolean;
  context: ContextType;
  openEnquiry: (kind?: EnquiryKind, serviceSlug?: string, optionName?: string) => void;
  closeEnquiry: () => void;
}

const EnquiryModalContext = createContext<ModalContextValue | undefined>(undefined);

export function EnquiryProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [context, setContext] = useState<ContextType>({ kind: 'inquiry' });

  const openEnquiry = (kind: EnquiryKind = 'inquiry', service?: string, option?: string) => {
    setContext({ kind, service, option });
    setIsOpen(true);
  };

  const closeEnquiry = () => {
    setIsOpen(false);
  };

  return (
    <EnquiryModalContext.Provider value={{ isOpen, context, openEnquiry, closeEnquiry }}>
      {children}
    </EnquiryModalContext.Provider>
  );
}

export function useEnquiry() {
  const ctx = useContext(EnquiryModalContext);
  if (!ctx) {
    throw new Error('useEnquiry must be used within an EnquiryProvider');
  }
  return ctx;
}
