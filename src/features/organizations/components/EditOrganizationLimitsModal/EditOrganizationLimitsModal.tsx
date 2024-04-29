/** @format */

import React from "react";
import { t } from "i18next";
import { Button } from "@/library/core";
import { Modal } from "@/library/modals";
import { Form } from "@/library/form";
import { useEditOrganizationLimitsForm } from "../../hooks";
import { EditOrganizationLimitsModalProps } from "./types";

export const EditOrganizationLimitsModal: React.FC<
  EditOrganizationLimitsModalProps
> = ({ organization, initialFocus = "teams" }) => {
  // Initializes component's states, hooks and etc.
  const form = useEditOrganizationLimitsForm({ organization });

  return (
    <Modal.Init disabled={form.isSubmitting}>
      <Modal.Header
        title={t("Change limits")}
        description={organization.name}
      />
      <Modal.Body>
        <Form.Init form={form}>
          <Form.Field direction="row" asterisk label={t("Teams limit")}>
            <Form.NumberInput
              name="teamsLimit"
              placeholder={t("Enter organization's limit for teams")}
              min={0}
              maxLength={4}
              autoFocus={initialFocus === "teams"}
              autoComplete="off"
            />
          </Form.Field>
          <Form.Field direction="row" label={t("Trainers limit")} asterisk>
            <Form.NumberInput
              name="trainersLimit"
              placeholder={t("Enter organization's limit for trainers")}
              min={0}
              maxLength={4}
              autoFocus={initialFocus === "trainers"}
              autoComplete="off"
            />
          </Form.Field>
          <Form.Field direction="row" label={t("Athletes limit")} asterisk>
            <Form.NumberInput
              name="athletesLimit"
              placeholder={t("Enter organization's limit for athletes")}
              min={0}
              maxLength={4}
              autoFocus={initialFocus === "athletes"}
              autoComplete="off"
            />
          </Form.Field>
          <Form.Field
            direction="row"
            label={t("Testings limit")}
            asterisk
            description={t(
              "The testings limit defines the number of tests allowed per athlete"
            )}>
            <Form.NumberInput
              name="testingsLimit"
              placeholder={t("Enter organization's limit for testings")}
              min={0}
              maxLength={4}
              autoFocus={initialFocus === "testings"}
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
