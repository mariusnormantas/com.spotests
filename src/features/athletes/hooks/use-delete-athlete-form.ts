/** @format */

import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { t } from "i18next";
import { getErrorResponseMessage } from "@/api";
import { useForm, UseFormReturn } from "@/library/form";
import { useToasts } from "@/library/toasts";
import { useDashboardLinks } from "@/features/dashboard";
import { useDeleteAthleteMutation } from "../services";
import { UseDeleteAthleteFormProps } from "./types";

export const useDeleteAthleteForm = ({
  athleteId,
  athleteName,
}: UseDeleteAthleteFormProps): UseFormReturn => {
  // Initializes component's states, hooks and etc.
  const navigate = useNavigate();
  const links = useDashboardLinks();
  const toasts = useToasts();
  return useForm({
    values: {
      name: "",
    },
    validation: Yup.object().shape({
      name: Yup.string().equals(
        [athleteName],
        t("Name is not valid, please enter {{name}}", { name: athleteName })
      ),
    }),
    useMutation: useDeleteAthleteMutation(
      { athleteId },
      {
        onMutate: () => {
          toasts.showToast({
            id: "delete-athlete",
            variant: "loading",
            message: t("Deleting athlete, please wait"),
          });
        },
        onSuccess: () => {
          navigate(links.athletes);
          toasts.showToast({
            id: "delete-athlete",
            variant: "success",
            message: t("Athlete has been deleted successfully"),
          });
        },
        onError: (error) => {
          const message = getErrorResponseMessage({ error });
          toasts.showToast({
            id: "delete-athlete",
            variant: "danger",
            message: t(message),
          });
        },
      }
    ),
  });
};
