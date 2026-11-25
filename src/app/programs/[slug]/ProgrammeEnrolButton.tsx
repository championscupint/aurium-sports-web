'use client';

import React from 'react';
import { useEnquiry } from '@/components/EnquiryContext';
import { trackEnrollmentClick } from '@/lib/analytics';
import { buttonClass } from '@/lib/ui';

export function ProgrammeEnrolButton({
  programmeId,
  enquiryOption,
  label = 'Book a Spot',
  variant = 'gold',
}: {
  programmeId: string;
  enquiryOption: string;
  label?: string;
  variant?: 'gold' | 'ink' | 'outline-chalk' | 'outline-ink';
}) {
  const { openEnquiry } = useEnquiry();

  return (
    <button
      type="button"
      onClick={() => {
        trackEnrollmentClick(programmeId);
        openEnquiry('register', 'academy', enquiryOption);
      }}
      className={buttonClass(variant, '!py-3.5 !px-7 text-xs')}
    >
      {label}
    </button>
  );
}
