/** @format */

import React from "react";
import { t } from "i18next";
import { Button, Section } from "@/library/core";
import { Modal } from "@/library/modals";
import { Form } from "@/library/form";
import { useDeleteAthleteForm } from "../../hooks";
import { DeleteAthleteModalProps } from "./types";

export const DeleteAthleteModal: React.FC<DeleteAthleteModalProps> = (
  props
) => {
  // Initializes component's states, hooks and etc.
  const form = useDeleteAthleteForm(props);

  return (
    <Modal.Init size="small" disabled={form.isSubmitting}>
      <Modal.Header
        title={t("Delete athlete")}
        description={props.athleteName}
      />
      <Modal.Body>
        <Form.Init form={form}>
          <Form.Field>
            <Form.Input
              name="name"
              label={t("Name")}
              asterisk
              placeholder={t("Enter athlete's name")}
              spellCheck={false}
              maxLength={64}
              autoComplete="off"
              autoFocus
            />
          </Form.Field>
          <Section.Helper variant="danger">
            {t(
              `This action cannot be undone. This will permanently deletes athlete's ({{name}}) data, testings and other associations`,
              { name: props.athleteName }
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
