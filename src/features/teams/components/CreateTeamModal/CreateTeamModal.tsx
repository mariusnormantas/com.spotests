/** @format */

import React from "react";
import { t } from "i18next";
import { Button } from "@/library/core";
import { Modal } from "@/library/modals";
import { Form } from "@/library/form";
import { useCreateTeamForm } from "../../hooks";
import { CreateTeamModalProps } from "./types";

export const CreateTeamModal: React.FC<CreateTeamModalProps> = ({
  organizationId,
  organizationName,
}) => {
  // Initializes component's states, hooks and etc.
  const form = useCreateTeamForm({ organizationId });

  return (
    <Modal.Init disabled={form.isSubmitting}>
      <Modal.Header
        title={t("Create new team")}
        description={organizationName}
      />
      <Modal.Body>
        <Form.Init form={form}>
          <Form.Field direction="row" label={t("Name")} asterisk>
            <Form.NameInput
              name="name"
              placeholder={t("Enter team's name")}
              spellCheck={false}
              maxLength={64}
              autoComplete="off"
              autoFocus
            />
          </Form.Field>
          <Form.Field direction="row" label={t("Description")}>
            <Form.Textarea
              name="description"
              placeholder={t("Enter team's description")}
              spellCheck={false}
              maxLength={250}
              rows={6}
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
