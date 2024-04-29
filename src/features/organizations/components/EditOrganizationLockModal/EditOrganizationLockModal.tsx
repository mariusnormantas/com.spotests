/** @format */

import React from "react";
import { t } from "i18next";
import { Button, Text } from "@/library/core";
import { Modal } from "@/library/modals";
import { Form } from "@/library/form";
import { useEditOrganizationLockForm } from "../../hooks";
import { OrganizationLockReasonListing } from "../OrganizationLockReasonListing";
import { EditOrganizationLockModalProps } from "./types";

export const EditOrganizationLockModal: React.FC<
  EditOrganizationLockModalProps
> = ({ organization }) => {
  // Initializes component's states, hooks and etc.
  const form = useEditOrganizationLockForm({ organization });

  return (
    <Modal.Init
      size={organization.locked ? "small" : "medium"}
      disabled={form.isSubmitting}>
      <Modal.Header title={t("Set lock")} description={organization.name} />
      <Modal.Body>
        <Form.Init form={form}>
          {organization.locked ? (
            <Text.Body1>
              {t(
                'User is already locked. Please confirm unlock process, by clicking "Unlock" button.'
              )}
            </Text.Body1>
          ) : (
            <OrganizationLockReasonListing
              // headline={t("Lock reason")}
              isLoading={form.isSubmitting}
              onSelectDocument={(document) => {
                form.handleChange("reason", document.reason);
              }}
              onDeselectDocument={() => {
                form.handleChange("reason");
              }}
            />
          )}
        </Form.Init>
      </Modal.Body>
      <Modal.Footer>
        <Button
          type="submit"
          form={form.id}
          variant="primary"
          loading={form.isSubmitting}
          disabled={!form.isValid}>
          {organization.locked ? t("Unlock") : t("Save")}
        </Button>
      </Modal.Footer>
    </Modal.Init>
  );
};
