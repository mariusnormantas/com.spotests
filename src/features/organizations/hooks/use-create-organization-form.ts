/** @format */

import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { t } from "i18next";
import { getErrorResponseMessage } from "@/api";
import { useForm, UseFormReturn } from "@/library/form";
import { useToasts } from "@/library/toasts";
import { useDashboardLinks } from "@/features/dashboard";
import { useCreateOrganizationMutation } from "@/features/organizations";

export const useCreateOrganizationForm = (): UseFormReturn => {
  // Initializes component's states, hooks and etc.
  const navigate = useNavigate();
  const links = useDashboardLinks();
  const toasts = useToasts();
  return useForm({
    values: {
      name: "",
      email: "",
      teamsLimit: 0,
      trainersLimit: 0,
      athletesLimit: 0,
      testingsLimit: 0,
    },
    validation: Yup.object().shape({
      name: Yup.string()
        .min(2, t("Name should contain between 2 and 64 symbols"))
        .max(64, t("Name should contain between 2 and 64 symbols")),
      email: Yup.string()
        .required(t("Email address is required"))
        .email(t("Email address does not match requirements")),
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
    useMutation: useCreateOrganizationMutation({
      onMutate: () => {
        toasts.showToast({
          id: "create-organization",
          variant: "loading",
          message: t("Creating organization, please wait"),
        });
      },
      onSuccess: ({ organizationId }) => {
        navigate(`${links.organizations}/${organizationId}`);
        toasts.showToast({
          id: "create-organization",
          variant: "success",
          message: t("Organization has been created successfully"),
        });
      },
      onError: (error) => {
        const message = getErrorResponseMessage({ error });
        toasts.showToast({
          id: "create-organization",
          variant: "danger",
          message: t(message),
        });
      },
    }),
  });
};
