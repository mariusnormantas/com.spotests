/** @format */

import React from "react";
import { t } from "i18next";
import { Form } from "@/library/form";
import { Button, Link, Text } from "@/library/core";
import { useForgotPasswordForm } from "../../hooks";
import * as sc from "./ForgotPasswordForm.styled";

export const ForgotPasswordForm: React.FC = () => {
  // Initializes component's states, hooks and etc.
  const form = useForgotPasswordForm();

  return (
    <Form.Init form={form}>
      <Text.Body1 render="span">
        {t(
          "Enter the email address associated with your account, and we'll send you a link to reset your password."
        )}
      </Text.Body1>
      <Form.Field>
        <Form.Input
          type="email"
          name="email"
          label={t("Email address")}
          asterisk
          placeholder={t("Enter your email address")}
          autoFocus
        />
      </Form.Field>
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
        <Link to="/login">
          <Text.Body1 weight="strong">{t("Go back to login page")}</Text.Body1>
        </Link>
      </sc.Actions>
    </Form.Init>
  );
};
