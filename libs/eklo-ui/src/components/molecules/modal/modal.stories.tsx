import type { Meta } from "@storybook/react";
import React from "react";
import { Button } from "../../atoms/button";
import { Modal } from "./modal";

const meta = {
  title: "Eklo UI/molecules/Modal",
  component: Modal,
  tags: ["autodocs"],
} satisfies Meta<typeof Modal>;

export default meta;

export function Example() {
  return <Modal trigger={<div>trigger</div>}>this is a test</Modal>;
}

export function FullScreen() {
  return (
    <Modal trigger={<Button>open</Button>} fullscreen>
      this is a test
    </Modal>
  );
}
