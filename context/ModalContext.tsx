'use client';

import { createContext, useContext, useState, type ReactNode } from 'react';

interface ModalCtx {
  isScheduleOpen: boolean;
  openSchedule: () => void;
  closeSchedule: () => void;
}

const ModalContext = createContext<ModalCtx>({
  isScheduleOpen: false,
  openSchedule: () => {},
  closeSchedule: () => {},
});

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  return (
    <ModalContext.Provider
      value={{
        isScheduleOpen,
        openSchedule: () => setIsScheduleOpen(true),
        closeSchedule: () => setIsScheduleOpen(false),
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export const useModal = () => useContext(ModalContext);
