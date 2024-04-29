/** @format */

import * as Yup from "yup";
import { t } from "i18next";
import { getErrorResponseMessage } from "@/api";
import { useForm, UseFormReturn } from "@/library/form";
import { useToasts } from "@/library/toasts";
import { useModals } from "@/library/modals";
import { useEditAthleteAccountMutation } from "../services";
import { UseEditAthleteAccountFormProps } from "./types";

export const useEditAthleteAccountForm = ({
  athlete,
}: UseEditAthleteAccountFormProps): UseFormReturn => {
  // Initializes component's states, hooks and etc.
  const toasts = useToasts();
  const modals = useModals();
  return useForm({
    values: {
      name: athlete.name,
      email: athlete.email,
    },
    validation: Yup.object().shape({
      name: Yup.string()
        .min(2, t("Name should contain between 2 and 64 symbols"))
        .max(64, t("Name should contain between 2 and 64 symbols")),
      email: Yup.string()
        .required(t("Email address is required"))
        .email(t("Email address does not match requirements")),
    }),
    useMutation: useEditAthleteAccountMutation(
      { athleteId: athlete._id },
      {
        onMutate: () => {
          toasts.showToast({
            id: "edit-athlete",
            variant: "loading",
            message: t("Updating athlete's information, please wait"),
          });
        },
        onSuccess: () => {
          modals.hideModal();
          toasts.showToast({
            id: "edit-athlete",
            variant: "success",
            message: t("Athlete has been updated successfully"),
          });
        },
        onError: (error) => {
          const message = getErrorResponseMessage({ error });
          toasts.showToast({
            id: "edit-athlete",
            variant: "danger",
            message: t(message),
          });
        },
      }
    ),
  });
};
