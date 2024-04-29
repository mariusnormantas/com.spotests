/** @format */

import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { t } from "i18next";
import { getErrorResponseMessage } from "@/api";
import { useForm, UseFormReturn } from "@/library/form";
import { useToasts } from "@/library/toasts";
import { useDashboardLinks } from "@/features/dashboard";
import { useDeleteTrainerMutation } from "../services";
import { UseDeleteTrainerFormProps } from "./types";

export const useDeleteTrainerForm = ({
  trainer,
}: UseDeleteTrainerFormProps): UseFormReturn => {
  // Initializes component's states, hooks and etc.
  const navigate = useNavigate();
  const links = useDashboardLinks();
  const toasts = useToasts();
  const form = useForm({
    values: {
      name: "",
    },
    validation: Yup.object().shape({
      name: Yup.string().equals(
        [trainer.name],
        t("Name is not valid, please enter {{name}}", { name: trainer.name })
      ),
    }),
    useMutation: useDeleteTrainerMutation(
      { trainerId: trainer._id, organizationId: trainer.organization._id },
      {
        onMutate: () => {
          toasts.showToast({
            id: "delete-trainer",
            variant: "loading",
            message: t("Deleting trainer, please wait"),
          });
        },
        onSuccess: () => {
          navigate(links.trainers);
          toasts.showToast({
            id: "delete-trainer",
            variant: "success",
            message: t("Trainer has been deleted successfully"),
          });
        },
        onError: (error) => {
          const message = getErrorResponseMessage({ error });
          toasts.showToast({
            id: "delete-trainer",
            variant: "danger",
            message: t(message),
          });
        },
      }
    ),
  });
  return form;
};
