'use client';

import React from 'react';
import { useEnquiry } from '@/components/EnquiryContext';
import { trackLocationPageView, trackEnrollmentClick } from '@/lib/analytics';
import { buttonClass } from '@/lib/ui';

export function LocationBookingButton({
  locationSlug,
  optionLabel,
  label = 'Book a Spot',
  variant = 'gold',
}: {
  locationSlug: string;
  optionLabel: string;
  label?: string;
  variant?: 'gold' | 'ink' | 'outline-chalk' | 'outline-ink';
}) {
  const { openEnquiry } = useEnquiry();

  React.useEffect(() => {
    trackLocationPageView(locationSlug);
  }, [locationSlug]);

  return (
    <button
      type="button"
      onClick={() => {
        trackEnrollmentClick(optionLabel);
        openEnquiry('register', 'academy', optionLabel);
      }}
      className={buttonClass(variant, '!py-3 !px-6 text-xs')}
    >
      {label}
    </button>
  );
}
