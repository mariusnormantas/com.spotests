/** @format */

import React from "react";
import { t } from "i18next";
import { Button } from "@/library/core";
import { Modal } from "@/library/modals";
import { Form } from "@/library/form";
import { useEditAthleteAccountForm } from "../../hooks";
import { EditAthleteAccountModalProps } from "./types";

export const EditAthleteAccountModal: React.FC<
  EditAthleteAccountModalProps
> = ({ athlete }) => {
  // Initializes edit athlete form, only when athlete is defined.
  const form = useEditAthleteAccountForm({ athlete });

  return (
    <Modal.Init>
      <Modal.Header title={t("Edit account")} description={athlete.name} />
      <Modal.Body>
        <Form.Init form={form}>
          <Form.Field direction="row" label={t("Name")} asterisk>
            <Form.NameInput
              name="name"
              placeholder={t("Enter athlete's name")}
              spellCheck={false}
              maxLength={64}
              autoComplete="off"
              autoFocus
            />
          </Form.Field>
          <Form.Field direction="row" label={t("Email address")} asterisk>
            <Form.Input
              name="email"
              placeholder={t("Enter athlete's email address")}
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
