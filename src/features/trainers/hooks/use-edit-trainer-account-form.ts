/** @format */

import * as Yup from "yup";
import { t } from "i18next";
import { getErrorResponseMessage } from "@/api";
import { useForm, UseFormReturn } from "@/library/form";
import { useToasts } from "@/library/toasts";
import { useModals } from "@/library/modals";
import { useEditTrainerAccountMutation } from "../services";
import { UseEditTrainerAccountFormProps } from "./types";

export const useEditTrainerAccountForm = ({
  trainer,
}: UseEditTrainerAccountFormProps): UseFormReturn => {
  // Initializes component's states, hooks and etc.
  const { showToast } = useToasts();
  const { hideModal } = useModals();
  const form = useForm({
    values: {
      name: trainer.name,
      email: trainer.email,
    },
    validation: Yup.object().shape({
      name: Yup.string()
        .min(2, t("Name should contain between 2 and 64 symbols"))
        .max(64, t("Name should contain between 2 and 64 symbols")),
      email: Yup.string()
        .required(t("Email address is required"))
        .email(t("Email address does not match requirements")),
    }),
    useMutation: useEditTrainerAccountMutation(
      { trainerId: trainer._id, organizationId: trainer.organization._id },
      {
        onSuccess: () => {
          hideModal();
          showToast({
            id: "edit-trainer",
            variant: "success",
            message: t("Trainer has been updated successfully"),
          });
        },
        onError: (error) => {
          const message = getErrorResponseMessage({ error });
          showToast({
            id: "edit-trainer",
            variant: "danger",
            message: t(message),
          });
        },
      }
    ),
  });
  return form;
};
