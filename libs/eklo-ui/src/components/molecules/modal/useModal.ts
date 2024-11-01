"use client";

import { useState } from "react";

export const useModal = <T>() => {
  const [state, setState] = useState<T>();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = (state?: T) => {
    setState(state);
    setIsOpen(true);
  };
  const closeModal = () => setIsOpen(false);

  return {
    state,
    isOpen,
    openModal,
    closeModal,
  };
};
