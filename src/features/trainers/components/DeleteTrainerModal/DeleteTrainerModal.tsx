/** @format */

import React from "react";
import { t } from "i18next";
import { Button, Section } from "@/library/core";
import { Modal } from "@/library/modals";
import { Form } from "@/library/form";
import { useDeleteTrainerForm } from "../../hooks";
import { DeleteTrainerModalProps } from "./types";

export const DeleteTrainerModal: React.FC<DeleteTrainerModalProps> = ({
  trainer,
}) => {
  // Initializes component's states, hooks and etc.
  const form = useDeleteTrainerForm({ trainer });

  return (
    <Modal.Init size="small" disabled={form.isSubmitting}>
      <Modal.Header title={t("Delete trainer")} description={trainer.name} />
      <Modal.Body>
        <Form.Init form={form}>
          <Form.Field>
            <Form.Input
              name="name"
              label={t("Name")}
              asterisk
              placeholder={t("Enter trainer's name")}
              spellCheck={false}
              maxLength={64}
              autoComplete="off"
              autoFocus
            />
          </Form.Field>
          <Section.Helper variant="danger">
            {t(
              `This action cannot be undone. This will permanently deletes trainer's ({{name}}) data and other associations`,
              { name: trainer.name }
            )}
          </Section.Helper>
        </Form.Init>
      </Modal.Body>
      <Modal.Footer>
        <Button
          type="submit"
          form={form.id}
          variant="danger"
          loading={form.isSubmitting}
          disabled={!form.isValid}>
          {t("Delete")}
        </Button>
      </Modal.Footer>
    </Modal.Init>
  );
};
