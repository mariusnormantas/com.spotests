/** @format */

import * as Yup from "yup";
import { t } from "i18next";
import { getErrorResponseMessage } from "@/api";
import { useToasts } from "@/library/toasts";
import { useForm, UseFormReturn } from "@/library/form";
import { useForgotPasswordMutation } from "@/features/auth";

export const useForgotPasswordForm = (): UseFormReturn => {
  // Initializes component's states, hooks and etc.
  const toasts = useToasts();
  const form = useForm({
    values: {
      email: "",
    },
    validation: Yup.object().shape({
      email: Yup.string()
        .required(t("Email address is required"))
        .email(t("Email address does not match requirements")),
    }),
    useMutation: useForgotPasswordMutation({
      onMutate: () => {
        toasts.showToast({
          id: "forgot",
          variant: "loading",
          message: t("Sending reset password link, please wait"),
        });
      },
      onSuccess: () => {
        form.store.clear();
        toasts.showToast({
          id: "forgot",
          variant: "success",
          message: t(
            "We have sent a link to reset your password to the specified email address"
          ),
        });
      },
      onError: (error) => {
        const message = getErrorResponseMessage({ error });
        toasts.showToast({
          id: "forgot",
          variant: "danger",
          message: t(message),
        });
      },
    }),
  });
  return form;
};
