/** @format */

import React from "react";
import { t } from "i18next";
import { Form } from "@/library/form";
import { Button, Link, Text } from "@/library/core";
import { useLoginForm } from "../../hooks";
import { SecurityTip } from "../SecurityTip";
import * as sc from "./LoginForm.styled";

export const LoginForm: React.FC = () => {
  // Initializes component's states, hooks and etc.
  const form = useLoginForm();

  return (
    <Form.Init form={form}>
      <Form.Field hideValidation>
        <Form.Input
          type="email"
          name="email"
          label={t("Email address")}
          placeholder={t("Enter your email address")}
          autoFocus
        />
      </Form.Field>
      <Form.Field
        hideValidation
        afterLabel={
          <Link to="/reset">
            <Text.Body1 weight="strong">
              {t("Forgot your password?")}
            </Text.Body1>
          </Link>
        }>
        <Form.PasswordInput
          name="password"
          label={t("Password")}
          placeholder={t("Enter your password")}
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
          {t("Continue")}
        </Button>
        <Link to="/">
          <Text.Body1 weight="strong">{t("Go back to home page")}</Text.Body1>
        </Link>
      </sc.Actions>
    </Form.Init>
  );
};
