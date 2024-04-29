/** @format */

import React from "react";
import { t } from "i18next";
import { Button, Tabs } from "@/library/core";
import { Modal } from "@/library/modals";
import { Form } from "@/library/form";
import { useCreateAthleteForm } from "../../hooks";
import { CreateAthleteModalProps } from "./types";

export const CreateAthleteModal: React.FC<CreateAthleteModalProps> = ({
  organizationId,
  organizationName,
}) => {
  // Initializes component's states, hooks and etc.
  const form = useCreateAthleteForm({ organizationId });

  return (
    <Modal.Init disabled={form.isSubmitting}>
      <Modal.Header
        title={t("Create new athlete")}
        description={organizationName}
      />
      <Tabs.Init defaultValue="account">
        <Tabs.List>
          <Tabs.Item value="account">{t("Account")}</Tabs.Item>
          <Tabs.Item value="data">{t("Data")}</Tabs.Item>
        </Tabs.List>
        <Modal.Body>
          <Form.Init form={form}>
            <Tabs.Panel value="account">
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
              <Form.Field
                direction="row"
                label={t("Email address")}
                asterisk
                description={t(
                  "Email address is used to login to the account"
                )}>
                <Form.Input
                  name="email"
                  placeholder={t("Enter athlete's email address")}
                  spellCheck={false}
                  maxLength={64}
                  autoComplete="off"
                />
              </Form.Field>
            </Tabs.Panel>
            <Tabs.Panel value="data">
              <Form.Field
                direction="row"
                label={t("Birth date")}
                description={t("Use YYYY-MM-DD format, when entering date")}
                asterisk>
                <Form.Input
                  name="birthDate"
                  placeholder={t("Enter athlete's birth date")}
                  spellCheck={false}
                  maxLength={10}
                  autoComplete="off"
                  autoFocus
                />
              </Form.Field>
              <Form.Field direction="row" label={t("Height")} asterisk>
                <Form.NumberInput
                  name="height"
                  placeholder={`${t("Enter athlete's height")} (cm)`}
                  maxLength={5}
                  min={0}
                  max={300}
                  decimals={1}
                  hideControls
                />
              </Form.Field>
              <Form.Field direction="row" label={t("Weight")} asterisk>
                <Form.NumberInput
                  name="weight"
                  placeholder={`${t("Enter athlete's weight")} (kg)`}
                  maxLength={5}
                  min={0}
                  max={300}
                  decimals={1}
                  hideControls
                />
              </Form.Field>
            </Tabs.Panel>
          </Form.Init>
        </Modal.Body>
      </Tabs.Init>
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
