/** @format */

import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { t } from "i18next";
import { getErrorResponseMessage } from "@/api";
import { useForm, UseFormReturn } from "@/library/form";
import { useToasts } from "@/library/toasts";
import { useDashboardLinks } from "@/features/dashboard";
import { useCreateAthleteMutation } from "../services";
import { UseCreateAthleteFormProps } from "./types";

export const useCreateAthleteForm = ({
  organizationId,
}: UseCreateAthleteFormProps): UseFormReturn => {
  // Initializes component's states, hooks and etc.
  const navigate = useNavigate();
  const links = useDashboardLinks();
  const toasts = useToasts();
  return useForm({
    values: {
      name: "",
      email: "",
      birthDate: "",
      height: "",
      weight: "",
    },
    validation: Yup.object().shape({
      name: Yup.string()
        .min(2, t("Name should contain between 2 and 64 symbols"))
        .max(64, t("Name should contain between 2 and 64 symbols")),
      email: Yup.string()
        .required(t("Email address is required"))
        .email(t("Email address does not match requirements")),
      birthDate: Yup.string().matches(
        /^\d{4}-\d{2}-\d{2}$/,
        t("Invalid date format. Please use the format YYYY-MM-DD")
      ),
      height: Yup.number()
        .typeError(t("Please enter value between 0 and 300"))
        .min(0, t("Please enter value between 0 and 300"))
        .max(300, t("Please enter value between 0 and 300")),
      weight: Yup.number()
        .typeError(t("Please enter value between 0 and 300"))
        .min(0, t("Please enter value between 0 and 300"))
        .max(300, t("Please enter value between 0 and 300")),
    }),
    useMutation: useCreateAthleteMutation(
      { organizationId },
      {
        onMutate: () => {
          toasts.showToast({
            id: "create-athlete",
            variant: "loading",
            message: t("Creating athlete, please wait"),
          });
        },
        onSuccess: ({ athleteId }) => {
          navigate(`${links.athletes}/${athleteId}`);
          toasts.showToast({
            id: "create-athlete",
            variant: "success",
            message: t("Athlete has been created successfully"),
          });
        },
        onError: (error) => {
          const message = getErrorResponseMessage({ error });
          toasts.showToast({
            id: "create-athlete",
            variant: "danger",
            message: t(message),
          });
        },
      }
    ),
  });
};
