/** @format */

import React from "react";
import { t } from "i18next";
import { Button, Section } from "@/library/core";
import { Modal } from "@/library/modals";
import { Form } from "@/library/form";
import { useDeleteTeamForm } from "../../hooks";
import { DeleteTeamModalProps } from "./types";

export const DeleteTeamModal: React.FC<DeleteTeamModalProps> = ({ team }) => {
  // Initializes component's states, hooks and etc.
  const form = useDeleteTeamForm({ team });

  return (
    <Modal.Init size="small" disabled={form.isSubmitting}>
      <Modal.Header title={t("Delete team")} description={team.name} />
      <Modal.Body>
        <Form.Init form={form}>
          <Form.Field>
            <Form.Input
              name="name"
              label={t("Name")}
              asterisk
              placeholder={t("Enter team's name")}
              spellCheck={false}
              maxLength={64}
              autoComplete="off"
              autoFocus
            />
          </Form.Field>
          <Section.Helper variant="danger">
            {t(
              `This action cannot be undone. This will permanently deletes team's ({{name}}) data. Trainers and athletes of the team will be removed from this team`,
              { name: team.name }
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
