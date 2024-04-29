/** @format */

import * as Yup from "yup";
import { t } from "i18next";
import { getErrorResponseMessage } from "@/api";
import { useForm, UseFormReturn } from "@/library/form";
import { useLoginMutation } from "@/features/auth";
import { useToasts } from "@/library/toasts";

export const useLoginForm = (): UseFormReturn => {
  // Initializes component's states, hooks and etc.
  const toasts = useToasts();
  const form = useForm({
    values: {
      email: "",
      password: "",
    },
    validation: Yup.object().shape({
      email: Yup.string()
        .required(t("Email address is required"))
        .email(t("Email address does not match requirements")),
      password: Yup.string()
        .min(4, t("Password should contain between 4 and 127 symbols"))
        .max(127, t("Password should contain between 4 and 127 symbols")),
    }),
    useMutation: useLoginMutation({
      onSuccess: () => {
        form.store.clear();
        toasts.hideToast("login");
      },
      onError: (error) => {
        const message = getErrorResponseMessage({ error });
        toasts.showToast({
          id: "login",
          variant: "danger",
          message: t(message),
        });
        if (!form.store.getError("password")) {
          form.store.clear(["password"]);
        }
      },
    }),
  });
  return form;
};
