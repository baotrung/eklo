import type { Meta } from "@storybook/react";
import React from "react";
import { Button } from "../../atoms/button";
import { Modal } from "./modal";
import { useModal } from "./useModal";

const meta = {
  title: "Eklo UI/molecules/Modal",
  component: Modal,
  tags: ["autodocs"],
} satisfies Meta<typeof Modal>;

export default meta;

export function Example() {
  const { isOpen, closeModal, openModal } = useModal();
  return (
    <div>
      <Button onClick={openModal}>open</Button>
      <Modal isOpen={isOpen} onClose={closeModal}>
        this is a test
      </Modal>
    </div>
  );
}

export function FullScreen() {
  const { isOpen, closeModal, openModal } = useModal();
  return (
    <div>
      <Button onClick={openModal}>open</Button>
      <Modal isOpen={isOpen} onClose={closeModal} fullScreen>
        this is a test
      </Modal>
    </div>
  );
}
