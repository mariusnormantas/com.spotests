/** @format */

import React from "react";
import { t } from "i18next";
import { Form } from "@/library/form";
import { Button, Link, Text } from "@/library/core";
import { useResetPasswordForm } from "../../hooks";
import { SecurityTip } from "../SecurityTip";
import { ResetPasswordFormProps } from "./types";
import * as sc from "./ResetPasswordForm.styled";

export const ResetPasswordForm: React.FC<ResetPasswordFormProps> = ({
  token,
}) => {
  // Initializes component's states, hooks and etc.
  const form = useResetPasswordForm({ token });

  return (
    <Form.Init form={form}>
      <Form.Field>
        <Form.Input
          type="email"
          name="email"
          label={t("Email address")}
          asterisk
          placeholder={t("Email address")}
          autoFocus
        />
      </Form.Field>
      <Form.Field>
        <Form.PasswordInput
          name="password"
          label={t("Password")}
          asterisk
          placeholder={t("Password")}
        />
      </Form.Field>
      <Form.Field>
        <Form.PasswordInput
          name="confirmPassword"
          label={t("Confirm password")}
          asterisk
          placeholder={t("Confirm password")}
        />
      </Form.Field>
      <SecurityTip />
      <sc.Actions>
        <Button
          type="submit"
          variant="primary"
          size="large"
          loading={form.isSubmitting}
          disabled={!form.isValid}
          fullWidth>
          {t("Confirm")}
        </Button>
        <Link to="/login">
          <Text.Body1 weight="strong">{t("Go back to login page")}</Text.Body1>
        </Link>
      </sc.Actions>
    </Form.Init>
  );
};
