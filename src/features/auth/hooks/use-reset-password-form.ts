/** @format */

import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { t } from "i18next";
import { getErrorResponseMessage } from "@/api";
import { useForm, UseFormReturn } from "@/library/form";
import { useResetPasswordMutation } from "@/features/auth";
import { useToasts } from "@/library/toasts";
import { UseResetPasswordFormProps } from "./types";

export const useResetPasswordForm = ({
  token,
}: UseResetPasswordFormProps): UseFormReturn => {
  // Initializes component's states, hooks and etc.
  const toasts = useToasts();
  const navigate = useNavigate();
  return useForm({
    values: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validation: Yup.object().shape({
      email: Yup.string()
        .required(t("Email address is required"))
        .email(t("Email address does not match requirements")),
      password: Yup.string()
        .matches(
          /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{4,127}$/,
          t(
            "Password must contain at least one capital letter, one number, and one symbol"
          )
        )
        .min(4, t("Password should contain between 4 and 127 symbols"))
        .max(127, t("Password should contain between 4 and 127 symbols")),
      confirmPassword: Yup.string().oneOf(
        [Yup.ref("password")],
        t("Passwords do not match")
      ),
    }),
    useMutation: useResetPasswordMutation(
      { token },
      {
        onSuccess: () => {
          navigate("/login", { replace: true });
          toasts.showToast({
            id: "reset",
            variant: "success",
            message: t(
              "Password has been successfully updated, you can login now!"
            ),
          });
        },
        onError: (error) => {
          const message = getErrorResponseMessage({ error });
          toasts.showToast({
            id: "reset",
            variant: "danger",
            message: t(message),
          });
        },
      }
    ),
  });
};
