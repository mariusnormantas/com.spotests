/** @format */

import React from "react";
import { t } from "i18next";
import { Button, Tabs } from "@/library/core";
import { Modal } from "@/library/modals";
import { Form } from "@/library/form";
import { useCreateOrganizationForm } from "../../hooks";

export const CreateOrganizationModal: React.FC = () => {
  // Initializes component's states, hooks and etc.
  const form = useCreateOrganizationForm();

  return (
    <Modal.Init disabled={form.isSubmitting}>
      <Modal.Header title={t("Create new organization")} />
      <Tabs.Init defaultValue="account">
        <Tabs.List>
          <Tabs.Item value="account">{t("Account")}</Tabs.Item>
          <Tabs.Item value="limits">{t("Limits")}</Tabs.Item>
        </Tabs.List>
        <Modal.Body>
          <Form.Init form={form}>
            <Tabs.Panel value="account">
              <Form.Field direction="row" label={t("Name")} asterisk>
                <Form.NameInput
                  name="name"
                  placeholder={t("Enter organization's name")}
                  spellCheck={false}
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
                  type="email"
                  name="email"
                  placeholder={t("Enter organization's email address")}
                  spellCheck={false}
                  autoComplete="off"
                />
              </Form.Field>
            </Tabs.Panel>
            <Tabs.Panel value="limits">
              <Form.Field direction="row" label={t("Teams limit")} asterisk>
                <Form.NumberInput
                  name="teamsLimit"
                  placeholder={t("Enter organization's limit for teams")}
                  min={0}
                  maxLength={4}
                  autoComplete="off"
                  autoFocus
                />
              </Form.Field>
              <Form.Field direction="row" label={t("Trainers limit")} asterisk>
                <Form.NumberInput
                  name="trainersLimit"
                  placeholder={t("Enter organization's limit for trainers")}
                  min={0}
                  maxLength={4}
                  autoComplete="off"
                />
              </Form.Field>
              <Form.Field direction="row" label={t("Athletes limit")} asterisk>
                <Form.NumberInput
                  name="athletesLimit"
                  placeholder={t("Enter organization's limit for athletes")}
                  min={0}
                  maxLength={4}
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
                  autoComplete="off"
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
