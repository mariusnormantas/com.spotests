/** @format */

import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { t } from "i18next";
import { getErrorResponseMessage } from "@/api";
import { useForm, UseFormReturn } from "@/library/form";
import { useToasts } from "@/library/toasts";
import { useDashboardLinks } from "@/features/dashboard";
import { useCreateTrainerMutation } from "../services";
import { UseCreateTrainerProps } from "./types";

export const useCreateTrainerForm = ({
  organizationId,
}: UseCreateTrainerProps): UseFormReturn => {
  // Initializes component's states, hooks and etc.
  const navigate = useNavigate();
  const links = useDashboardLinks();
  const toasts = useToasts();
  return useForm({
    values: {
      name: "",
      email: "",
    },
    validation: Yup.object().shape({
      name: Yup.string()
        .min(2, t("Name should contain between 2 and 64 symbols"))
        .max(64, t("Name should contain between 2 and 64 symbols")),
      email: Yup.string()
        .required(t("Email address is required"))
        .email(t("Email address does not match requirements")),
    }),
    useMutation: useCreateTrainerMutation(
      { organizationId },
      {
        onMutate: () => {
          toasts.showToast({
            id: "create-trainer",
            variant: "loading",
            message: t("Creating trainer, please wait"),
          });
        },
        onSuccess: ({ trainerId }) => {
          navigate(`${links.trainers}/${trainerId}`);
          toasts.showToast({
            id: "create-trainer",
            variant: "success",
            message: t("Trainer has been created successfully"),
          });
        },
        onError: (error) => {
          const message = getErrorResponseMessage({ error });
          toasts.showToast({
            id: "create-trainer",
            variant: "danger",
            message: t(message),
          });
        },
      }
    ),
  });
};
