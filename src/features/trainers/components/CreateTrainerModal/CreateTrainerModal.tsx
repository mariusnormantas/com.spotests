/** @format */

import React from "react";
import { t } from "i18next";
import { Button } from "@/library/core";
import { Modal } from "@/library/modals";
import { Form } from "@/library/form";
import { useCreateTrainerForm } from "../../hooks";
import { CreateTrainerModalProps } from "./types";

export const CreateTrainerModal: React.FC<CreateTrainerModalProps> = ({
  organizationId,
  organizationName,
}) => {
  // Initializes component's states, hooks and etc.
  const form = useCreateTrainerForm({ organizationId });

  return (
    <Modal.Init disabled={form.isSubmitting}>
      <Modal.Header
        title={t("Create new trainer")}
        description={organizationName}
      />
      <Modal.Body>
        <Form.Init form={form}>
          <Form.Field direction="row" label={t("Name")} asterisk>
            <Form.NameInput
              name="name"
              placeholder={t("Enter trainer's name")}
              spellCheck={false}
              maxLength={64}
              autoComplete="off"
              autoFocus
            />
          </Form.Field>
          <Form.Field
            direction="row"
            label={t("Email address")}
            asterisk
            description={t("Email address is used to login to the account")}>
            <Form.Input
              name="email"
              placeholder={t("Enter trainer's email address")}
              spellCheck={false}
              maxLength={64}
              autoComplete="off"
            />
          </Form.Field>
        </Form.Init>
      </Modal.Body>
      <Modal.Footer>
        <Button
          type="submit"
          form={form.id}
          variant="primary"
          loading={form.isSubmitting}
          disabled={!form.isValid}>
          {t("Create")}
        </Button>
      </Modal.Footer>
    </Modal.Init>
  );
};
