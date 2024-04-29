/** @format */

import * as Yup from "yup";
import { t } from "i18next";
import { getErrorResponseMessage } from "@/api";
import { useForm, UseFormReturn } from "@/library/form";
import { useToasts } from "@/library/toasts";
import { useModals } from "@/library/modals";
import { useEditOrganizationLockMutation } from "../services";
import { UseEditOrganizationLockFormProps } from "./types";

export const useEditOrganizationLockForm = ({
  organization,
}: UseEditOrganizationLockFormProps): UseFormReturn => {
  // Initializes component's states, hooks and etc.
  const toasts = useToasts();
  const modals = useModals();
  return useForm({
    values: {
      status: !organization.locked,
      reason: "",
    },
    validation: Yup.object().shape({
      status: Yup.boolean().required(),
      reason: Yup.string().when("status", {
        is: true,
        then: (reason) => reason.required(),
      }),
    }),
    initialValidation: organization.locked,
    useMutation: useEditOrganizationLockMutation(
      { organizationId: organization._id },
      {
        onMutate: () => {
          toasts.showToast({
            id: "lock-organization",
            variant: "loading",
            message: t("Updating organization's lock, please wait"),
          });
        },
        onSuccess: () => {
          modals.hideModal();
          toasts.showToast({
            id: "lock-organization",
            variant: "success",
            message: t("Organization's lock has been updated"),
          });
        },
        onError: (error) => {
          const message = getErrorResponseMessage({ error });
          toasts.showToast({
            id: "lock-organization",
            variant: "danger",
            message: t(message),
          });
        },
      }
    ),
  });
};
