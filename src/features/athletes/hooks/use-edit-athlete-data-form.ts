/** @format */

import * as Yup from "yup";
import { t } from "i18next";
import { format } from "date-fns";
import { getErrorResponseMessage } from "@/api";
import { useForm, UseFormReturn } from "@/library/form";
import { useToasts } from "@/library/toasts";
import { useModals } from "@/library/modals";
import { useEditAthleteDataMutation } from "../services";
import { UseEditAthleteDataFormProps } from "./types";

export const useEditAthleteDataForm = ({
  athlete,
}: UseEditAthleteDataFormProps): UseFormReturn => {
  // Initializes component's states, hooks and etc.
  const toasts = useToasts();
  const modals = useModals();
  return useForm({
    values: {
      birthDate: format(new Date(athlete.birthDate), "yyyy-MM-dd"),
      height: athlete.height.toFixed(1),
      weight: athlete.weight.toFixed(1),
    },
    validation: Yup.object().shape({
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
    useMutation: useEditAthleteDataMutation(
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
