/** @format */

import React from "react";
import { t } from "i18next";
import { Button } from "@/library/core";
import { Modal } from "@/library/modals";
import { Form } from "@/library/form";
import { useEditTeamForm } from "../../hooks";
import { EditTeamModalProps } from "./types";

export const EditTeamModal: React.FC<EditTeamModalProps> = ({
  team,
  initialFocus = "name",
}) => {
  // Initializes component's states, hooks and etc.
  const form = useEditTeamForm({ team });

  return (
    <Modal.Init disabled={form.isSubmitting}>
      <Modal.Header title={t("Edit team")} description={team.name} />
      <Modal.Body>
        <Form.Init form={form}>
          <Form.Field direction="row" label={t("Name")} asterisk>
            <Form.NameInput
              name="name"
              placeholder={t("Enter team's name")}
              spellCheck={false}
              maxLength={64}
              autoFocus={initialFocus === "name"}
              autoComplete="off"
            />
          </Form.Field>
          <Form.Field direction="row" label={t("Description")}>
            <Form.Textarea
              name="description"
              placeholder={t("Enter team's description")}
              spellCheck={false}
              maxLength={250}
              rows={8}
              autoFocus={initialFocus === "description"}
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
