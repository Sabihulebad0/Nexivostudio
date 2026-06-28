'use client';

import { createContext, useContext, useState, type ReactNode } from 'react';

export interface PricingModalData {
  service: string;
  plan: string;
  price: string;
  period?: string;
  features: string[];
}

interface ModalCtx {
  isScheduleOpen: boolean;
  openSchedule: () => void;
  closeSchedule: () => void;
  pricingData: PricingModalData | null;
  openPricing: (data: PricingModalData) => void;
  closePricing: () => void;
}

const ModalContext = createContext<ModalCtx>({
  isScheduleOpen: false,
  openSchedule: () => {},
  closeSchedule: () => {},
  pricingData: null,
  openPricing: () => {},
  closePricing: () => {},
});

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  const [pricingData, setPricingData] = useState<PricingModalData | null>(null);

  return (
    <ModalContext.Provider
      value={{
        isScheduleOpen,
        openSchedule: () => setIsScheduleOpen(true),
        closeSchedule: () => setIsScheduleOpen(false),
        pricingData,
        openPricing: (data) => setPricingData(data),
        closePricing: () => setPricingData(null),
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export const useModal = () => useContext(ModalContext);
