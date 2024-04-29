/** @format */

import * as Yup from "yup";
import { t } from "i18next";
import { getErrorResponseMessage } from "@/api";
import { useForm, UseFormReturn } from "@/library/form";
import { useToasts } from "@/library/toasts";
import { useModals } from "@/library/modals";
import { useEditOrganizationAccountMutation } from "../services";
import { UseEditOrganizationAccountFormProps } from "./types";

export const useEditOrganizationAccountForm = ({
  organization,
}: UseEditOrganizationAccountFormProps): UseFormReturn => {
  // Initializes component's states, hooks and etc.
  const toasts = useToasts();
  const modals = useModals();
  return useForm({
    values: {
      name: organization.name,
      email: organization.email,
    },
    validation: Yup.object().shape({
      name: Yup.string()
        .min(2, t("Name should contain between 2 and 64 symbols"))
        .max(64, t("Name should contain between 2 and 64 symbols")),
      email: Yup.string()
        .required(t("Email address is required"))
        .email(t("Email address does not match requirements")),
    }),
    useMutation: useEditOrganizationAccountMutation(
      { organizationId: organization._id },
      {
        onMutate: () => {
          toasts.showToast({
            id: "edit-organization",
            variant: "loading",
            message: t("Updating organization's information, please wait"),
          });
        },
        onSuccess: () => {
          modals.hideModal();
          toasts.showToast({
            id: "edit-organization",
            variant: "success",
            message: t("Organization has been updated successfully"),
          });
        },
        onError: (error) => {
          const message = getErrorResponseMessage({ error });
          toasts.showToast({
            id: "edit-organization",
            variant: "danger",
            message: t(message),
          });
        },
      }
    ),
  });
};
