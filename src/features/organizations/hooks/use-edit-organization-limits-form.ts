/** @format */

import * as Yup from "yup";
import { t } from "i18next";
import { getErrorResponseMessage } from "@/api";
import { useForm, UseFormReturn } from "@/library/form";
import { useModals } from "@/library/modals";
import { useEditOrganizationLimitsMutation } from "../services";
import { UseEditOrganizationLimitsFormProps } from "./types";
import { useToasts } from "@/library/toasts";

export const useEditOrganizationLimitsForm = ({
  organization,
}: UseEditOrganizationLimitsFormProps): UseFormReturn => {
  // Initializes component's states, hooks and etc.
  const toasts = useToasts();
  const modals = useModals();
  return useForm({
    values: {
      teamsLimit: organization.teamsLimit,
      trainersLimit: organization.trainersLimit,
      athletesLimit: organization.athletesLimit,
      testingsLimit: organization.testingsLimit,
    },
    validation: Yup.object().shape({
      teamsLimit: Yup.number()
        .typeError(t("Please enter value between 0 and 9999"))
        .min(0, t("Please enter value between 0 and 9999"))
        .max(9999, t("Please enter value between 0 and 9999")),
      trainersLimit: Yup.number()
        .typeError(t("Please enter value between 0 and 9999"))
        .min(0, t("Please enter value between 0 and 9999"))
        .max(9999, t("Please enter value between 0 and 9999")),
      athletesLimit: Yup.number()
        .typeError(t("Please enter value between 0 and 9999"))
        .min(0, t("Please enter value between 0 and 9999"))
        .max(9999, t("Please enter value between 0 and 9999")),
      testingsLimit: Yup.number()
        .typeError(t("Please enter value between 0 and 9999"))
        .min(0, t("Please enter value between 0 and 9999"))
        .max(9999, t("Please enter value between 0 and 9999")),
    }),
    useMutation: useEditOrganizationLimitsMutation(
      { organizationId: organization._id },
      {
        onMutate: () => {
          toasts.showToast({
            id: "edit-organization-limits",
            variant: "loading",
            message: t("Updating organization's information, please wait"),
          });
        },
        onSuccess: () => {
          modals.hideModal();
          toasts.showToast({
            id: "edit-organization-limits",
            variant: "success",
            message: t("Organization has been updated successfully"),
          });
        },
        onError: (error) => {
          const message = getErrorResponseMessage({ error });
          toasts.showToast({
            id: "edit-organization-limits",
            variant: "danger",
            message: t(message),
          });
        },
      }
    ),
  });
};
