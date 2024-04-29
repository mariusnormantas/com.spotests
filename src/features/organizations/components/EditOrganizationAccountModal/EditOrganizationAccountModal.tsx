/** @format */

import React from "react";
import { t } from "i18next";
import { Button } from "@/library/core";
import { Modal } from "@/library/modals";
import { Form } from "@/library/form";
import { useEditOrganizationAccountForm } from "../../hooks";
import { EditOrganizationAccountModalProps } from "./types";

export const EditOrganizationAccountModal: React.FC<
  EditOrganizationAccountModalProps
> = ({ organization }) => {
  // Initializes component's states, hooks and etc.
  const form = useEditOrganizationAccountForm({ organization });

  return (
    <Modal.Init disabled={form.isSubmitting}>
      <Modal.Header title={t("Edit account")} description={organization.name} />
      <Modal.Body>
        <Form.Init form={form}>
          <Form.Field direction="row" label={t("Name")} asterisk>
            <Form.NameInput
              name="name"
              placeholder={t("Enter organization's name")}
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
            description={t(
              "After changing the email address, the user must use it when logging in"
            )}>
            <Form.Input
              type="email"
              name="email"
              placeholder={t("Enter organization's email address")}
              spellCheck={false}
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
          {t("Save")}
        </Button>
      </Modal.Footer>
    </Modal.Init>
  );
};
